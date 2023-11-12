
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    /// <summary>
    /// We need this because the default Sunday readings take precedence over the advent/epiphany overrides readings (that come from the weekday lectionary), 
    /// but the day names still need to be applied.
    /// 
    /// So we are applying the day names separately, and then when we apply the advent/epiphany overrides, we skip if it is a Sunday.
    /// </summary>
    public class Step02AdventToEpiphanyNames : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step02AdventToEpiphanyNames(IRuleApplier ruleApplier, 
            IRulesFactory rulesFactory, 
            IByDayOfMonthRuleSetApplier ruleSetApplier) 
            : base(ruleApplier, rulesFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        protected override string RuleSetName => "SpecificDayNamesInAdventAndEpiphany.cs";

        public int Order => 2;

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, liturgicalYear, ApplicableRules(liturgicalYear.RclYear));
        }
    }
}
