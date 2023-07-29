
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Pipeline.DTOs;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step02AdventToEpiphanyOverrides : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step02AdventToEpiphanyOverrides(IRuleApplier ruleApplier, 
            IAllDataFactory dataFactory,
            IByDayOfMonthRuleSetApplier ruleSetApplier)
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 2;

        protected override string RuleSetName => "SpecificDaysInAdventAndEpiphany.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, ApplicableRules);
        }

        protected override bool ShouldIncludeRule(RuleData ruleData)
        {
            return base.ShouldIncludeRule(ruleData) && ruleData.RuleType == RuleType.ByDayOfMonth;
        }
    }
}
