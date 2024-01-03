
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step13ManuallyExtractedSundays : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step13ManuallyExtractedSundays(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 13;

        protected override string RuleSetName => "ManuallyExtractedSundays";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, liturgicalYear, ApplicableRules(liturgicalYear.RclYear));
        }
    }
}
