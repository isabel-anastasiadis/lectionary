
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class FeastDaysByDayOfMonth : BaseStep, IStep
    {
        public FeastDaysByDayOfMonth(IRuleApplier ruleApplier, IAllDataFactory dataFactory) : base(ruleApplier, dataFactory)
        {
        }

        public int Order => 9;

        protected override string RuleSetName => "FeastDaysByDayOfMonth.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return ApplyRulesByDayOfMonth(workingResult);
        }
    }
}
