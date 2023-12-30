
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step09FourWeeksLeadingToAdvent : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public int Order => 9;

        protected override string RuleSetName => "FourWeeksLeadingToAdvent";


        public Step09FourWeeksLeadingToAdvent(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier)
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }


            if (workingResult.Input?.FourthSundayBeforeAdvent == null)
            {
                throw new ArgumentNullException("workingResult.Input.FourthSundayBeforeAdvent");
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input.FourthSundayBeforeAdvent.Value;

            var RulesToStartWith = applicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, dateOfFirstDayTheRuleAppliesTo, RulesToStartWith, null);

        }
    }
}
