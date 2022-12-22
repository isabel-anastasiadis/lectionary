

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
            if (firstDate.DayOfWeek != DayOfWeek.Sunday) {
                throw new ArgumentException($"Expected the first day to be a Sunday, but it was {firstDate.DayOfWeek} ({firstDate}).  The first day should be the 1st Sunday of Advent.", nameof(workingResult.Result));
            }

            // the first sunday of advent
            var ruleDataToStartWith = ApplicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, firstDate, ruleDataToStartWith, null);
        }

    }
}
