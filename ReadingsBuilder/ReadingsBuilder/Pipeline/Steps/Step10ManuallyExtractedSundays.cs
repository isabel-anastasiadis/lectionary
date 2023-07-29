
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Pipeline.DTOs;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step10ManuallyExtractedSundays : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step10ManuallyExtractedSundays(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 10;

        protected override string RuleSetName => "ManuallyExtractedSundays.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, ApplicableRules);
        }
    }
}
