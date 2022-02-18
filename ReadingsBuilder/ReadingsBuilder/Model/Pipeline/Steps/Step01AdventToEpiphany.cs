

using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step01AdventToEpiphany : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public int Order => 1;

        protected override string RuleSetName => "BaseAdvent.cs";


        public Step01AdventToEpiphany(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier ) 
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {

            if (workingResult == null) {
                throw new ArgumentNullException(nameof(workingResult));
            }
           
            var firstDate = workingResult.Result.Keys.OrderBy(x => x).FirstOrDefault();
            if (firstDate.Month != 12 || firstDate.Day != 1) {
                throw new ArgumentException($"Expected the first day in the year to be December 1st, but it was {firstDate}", nameof(workingResult.Result));
            }

            // the rule in the first week of advent with the same DayOfWeek
            var ruleDataToStartWith = ApplicableRules.GetRange(0, 7).FirstOrDefault(x => x.Weekday == firstDate.DayOfWeek);

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, firstDate, ruleDataToStartWith, null);
        }

    }
}
