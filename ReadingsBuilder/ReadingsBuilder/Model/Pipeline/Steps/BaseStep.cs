
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public abstract class BaseStep
    {
        protected readonly List<RuleData> ApplicableRules;

        protected readonly IRuleApplier RuleApplier;

        protected abstract string RuleSetName { get; }

        public BaseStep(IRuleApplier ruleApplier, IAllDataFactory dataFactory)
        {
            RuleApplier = ruleApplier;

            if (dataFactory == null)
            {
                throw new ArgumentNullException(nameof(dataFactory));
            }

            var allData = dataFactory.GenerateAllData();

            ApplicableRules = allData
                .Where(x => ShouldIncludeRule(x))
                .OrderBy(x => x.RowNumberInRuleSet)
                .ToList() ?? new List<RuleData>();

            if (!ApplicableRules.Any())
            {
                throw new ArgumentException("No matching rules were passed in");
            }
        }

        protected virtual bool ShouldIncludeRule(RuleData ruleData) {
            return ruleData.HandlingClassName == this.RuleSetName;
        }

        protected PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            foreach (var rule in ApplicableRules)
            {

                var possibleDates = workingResult.Result.Keys.Where(date => date.Month == rule.Month && date.Day == rule.Day).ToList();
                if (possibleDates.Count() > 1)
                {
                    throw new ArgumentException($"There should only be one matching day per rule (Steps are only assumed to run on a year's worth of data, and previous steps might not have processed the necessary days)");
                }

                DateOnly? date = possibleDates.Any() ? possibleDates.First() : null;

                if (date.HasValue)
                {
                    var day = workingResult.Result[date.Value].OptionOne;

                    if (day != null)
                    {
                        RuleApplier.ApplyRuleToDay(rule, day);
                    }
                }
            }

            return workingResult;
        }

        protected PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult, DateOnly dateOfFirstDayRuleAppliesTo, RuleData? ruleDataToStartWith) 
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (dateOfFirstDayRuleAppliesTo == default(DateOnly))
            {
                return workingResult;
            }

            if (ruleDataToStartWith == null)
            {
                return workingResult;
            }

            var indexOfFirstRuleToStartWith = ApplicableRules.IndexOf(ruleDataToStartWith);
            var currentDate = dateOfFirstDayRuleAppliesTo;

            for (int i = indexOfFirstRuleToStartWith; i < Math.Min(ApplicableRules.Count, indexOfFirstRuleToStartWith + workingResult.Result.Count); i++)
            {
                var ruleData = ApplicableRules[i];
                var day = workingResult.Result[currentDate].OptionOne;

                if (day == null)
                {
                    throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                }

                RuleApplier.ApplyRuleToDay(ruleData, day);

                currentDate = currentDate.AddDays(1);

            }

            

            return workingResult;

        }
    }
}
