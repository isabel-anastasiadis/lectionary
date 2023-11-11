
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step10ManuallyExtractedSundays : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step10ManuallyExtractedSundays(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 10;

        protected override string RuleSetName => "ManuallyExtractedSundays.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, liturgicalYear, ApplicableRules(liturgicalYear.RclYear));
        }
    }
}
