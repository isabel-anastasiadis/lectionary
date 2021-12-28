
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class SundaysIn2022 : BaseStep, IStep
    {
        public SundaysIn2022(IRuleApplier ruleApplier, IAllDataFactory dataFactory) : base(ruleApplier, dataFactory)
        {
        }

        public int Order => 10;

        protected override string RuleSetName => "SundaysIn2022.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            return RunStepByDayOfMonth(workingResult);
        }
    }
}
