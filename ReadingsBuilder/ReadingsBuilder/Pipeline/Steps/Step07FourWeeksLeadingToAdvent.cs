
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step07FourWeeksLeadingToAdvent : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public int Order => 7;

        protected override string RuleSetName => "FourWeeksLeadingToAdvent.cs";


        public Step07FourWeeksLeadingToAdvent(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier)
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }


            if (workingResult.Input?.FourthSundayBeforeAdvent == null)
            {
                throw new ArgumentNullException("workingResult.Input.FourthSundayBeforeAdvent");
            }

            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input.FourthSundayBeforeAdvent.Value;

            var RulesToStartWith = ApplicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, dateOfFirstDayTheRuleAppliesTo, RulesToStartWith, null);

        }
    }
}
