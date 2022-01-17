
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step09FeastDaysByDayOfMonth : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step09FeastDaysByDayOfMonth(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 9;

        protected override string RuleSetName => "FeastDaysByDayOfMonth.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, ApplicableRules);
        }
    }
}
