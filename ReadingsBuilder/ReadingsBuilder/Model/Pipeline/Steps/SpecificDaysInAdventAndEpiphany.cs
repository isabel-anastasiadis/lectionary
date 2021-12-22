
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class SpecificDaysInAdventAndEpiphany : BaseStep, IStep
    {
        public SpecificDaysInAdventAndEpiphany(IRuleApplier ruleApplier, IAllDataFactory dataFactory) 
            : base(ruleApplier, dataFactory)
        {
        }

        public int Order => 2;

        protected override string RuleSetName => "SpecificDaysInAdventAndEpiphany.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            foreach (var rule in ApplicableRules) {

                var possibleDates = workingResult.Result.Keys.Where(date => date.Month == rule.Month && date.Day == rule.Day).ToList();
                if (possibleDates.Count() > 1) {
                    throw new ArgumentException($"There should only be one matching day per rule (Steps are only assumed to run on a year's worth of data, and previous steps might not have processed the necessary days)");
                }

                DateOnly? date = possibleDates.Any() ? possibleDates.First() : null;

                if (date.HasValue)
                {
                    var day = workingResult.Result[date.Value].OptionOne;

                    if(day != null)
                    {
                        ApplyRuleToDay(day, rule);
                    }
                }
            }

            return workingResult;
        }

        protected override bool ShouldIncludeRule(RuleData ruleData)
        {
            return base.ShouldIncludeRule(ruleData) && ruleData.RuleType == RuleType.ByDayOfMonth;
        }
    }
}
