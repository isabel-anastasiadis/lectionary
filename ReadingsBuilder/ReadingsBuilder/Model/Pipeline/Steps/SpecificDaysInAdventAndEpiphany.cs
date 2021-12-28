
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class SpecificDaysInAdventAndEpiphany : BaseStep, IStep
    {
        public SpecificDaysInAdventAndEpiphany(IRuleApplier ruleApplier, IAllDataFactory dataFactory) 
            : base(ruleApplier, dataFactory)
        {
        }

        public int Order => 2;

        protected override string RuleSetName => "SpecificDaysInAdventAndEpiphany.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return ApplyRulesByDayOfMonth(workingResult);
        }

        protected override bool ShouldIncludeRule(RuleData ruleData)
        {
            return base.ShouldIncludeRule(ruleData) && ruleData.RuleType == RuleType.ByDayOfMonth;
        }
    }
}
