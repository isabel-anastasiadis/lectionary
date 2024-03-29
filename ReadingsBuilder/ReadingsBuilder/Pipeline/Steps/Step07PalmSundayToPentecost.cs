using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step07PalmSundayToPentecost : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step07PalmSundayToPentecost(IRuleApplier ruleApplier, 
            IRulesFactory dataFactory, 
            IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 7;

        protected override string RuleSetName => "PalmSundayToPentecost";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.PalmSunday == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.PalmSunday));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // work out what date to start with
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input.PalmSunday.Value;

            return ruleSetApplier.ApplyRulesByDayOfWeek(
                workingResult,
                liturgicalYear,
                applicableRules, 
                dateOfFirstDayTheRuleAppliesTo, 
                RulesToStartWith: null, 
                dateOfLastDayRuleAppliesTo: null);
        }

    }
}