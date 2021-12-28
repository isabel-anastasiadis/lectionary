
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline
{
    public class RuleSetApplier
    {
        private readonly IRuleApplier ruleApplier;

        public RuleSetApplier(IRuleApplier ruleApplier)
        {
            this.ruleApplier = ruleApplier;
        }

        protected PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<RuleData> applicableRules)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            foreach (var rule in applicableRules)
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
                        //ApplyRuleToDay(day, rule);
                    }
                }
            }

            return workingResult;
        }

        protected PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult, List<RuleData> applicableRules, DateOnly dateOfFirstDayRuleAppliesTo, RuleData? ruleDataToStartWith)
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

            var indexOfFirstRuleToStartWith = applicableRules.IndexOf(ruleDataToStartWith);
            var currentDate = dateOfFirstDayRuleAppliesTo;

            for (int i = indexOfFirstRuleToStartWith; i < Math.Min(applicableRules.Count, indexOfFirstRuleToStartWith + workingResult.Result.Count); i++)
            {
                var ruleData = applicableRules[i];
                var day = workingResult.Result[currentDate].OptionOne;

                if (day == null)
                {
                    throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                }

                //ApplyRuleToDay(day, ruleData);

                currentDate = currentDate.AddDays(1);

            }

            return workingResult;

        }

    }
}
