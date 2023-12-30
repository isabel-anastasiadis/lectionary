using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    internal class Step06ThreeSundaysBetweenEpiphanyAndLent : BaseStep, IStep
    {
        public Step06ThreeSundaysBetweenEpiphanyAndLent(IRuleApplier ruleApplier, IRulesFactory rulesFactory) 
            : base(ruleApplier, rulesFactory)
        {
        }

        public int Order => 6;

        protected override string RuleSetName => "ThreeSundaysBetweenEpiphanyAndLent";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return workingResult;
        }
    }
}
