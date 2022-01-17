
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
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
