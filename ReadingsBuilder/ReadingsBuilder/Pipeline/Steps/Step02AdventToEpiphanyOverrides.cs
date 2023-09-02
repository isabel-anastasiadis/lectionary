
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step02AdventToEpiphanyOverrides : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step02AdventToEpiphanyOverrides(IRuleApplier ruleApplier, 
            IRulesFactory dataFactory,
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
    }
}
