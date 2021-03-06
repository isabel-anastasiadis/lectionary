using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step05PalmSundayToPentecost : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step05PalmSundayToPentecost(IRuleApplier ruleApplier, 
            IAllDataFactory dataFactory, 
            IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 5;

        protected override string RuleSetName => "PalmSundayToPentecost.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.PalmSunday == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.PalmSunday));
            }

            // work out what date to start with
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input.PalmSunday.Value;

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, 
                ApplicableRules, 
                dateOfFirstDayTheRuleAppliesTo, 
                ruleDataToStartWith: null, 
                dateOfLastDayRuleAppliesTo: null);
        }

    }
}