
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step06OrdinaryTimeAfterPentecost : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step06OrdinaryTimeAfterPentecost(IRuleApplier ruleApplier, 
            IAllDataFactory dataFactory, 
            IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 6;

        protected override string RuleSetName => "OrdinaryTimeAfterPentecost.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.Pentecost == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.Pentecost));
            }

            if (workingResult.Input?.FourthSundayBeforeAdvent == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.FourthSundayBeforeAdvent));
            }

            // work out what date to start with
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input
                .Pentecost
                .Value
                .AddDays(1);

            var dateOfLastDayRuleAppliesTo = workingResult.Input.FourthSundayBeforeAdvent.Value;

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult,
                ApplicableRules,
                dateOfFirstDayTheRuleAppliesTo,
                ruleDataToStartWith: null,
                dateOfLastDayRuleAppliesTo);

        }
    }
}
