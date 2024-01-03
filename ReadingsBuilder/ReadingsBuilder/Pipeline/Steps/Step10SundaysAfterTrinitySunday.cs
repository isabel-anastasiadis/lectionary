
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step10SundaysAfterTrinitySunday : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step10SundaysAfterTrinitySunday(IRuleApplier ruleApplier, 
            IRulesFactory rulesFactory,
            IByDayOfWeekRuleSetApplier ruleSetApplier) 
            : base(ruleApplier, rulesFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 10;

        protected override string RuleSetName => "SundaysAfterTrinitySunday";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return workingResult;
        }
    }
}
