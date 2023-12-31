
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.RuleExceptions;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    /// <summary>
    /// NOTE: the default Sunday readings (from the standard sunday lectionary) take precedence over the advent/epiphany overrides readings (that come from the weekday lectionary).
    /// 
    /// So we are applying the day names separately, and then when we apply the advent/epiphany overrides, we skip if it is a Sunday.
    /// </summary>
    public class Step03SpecificDaysInAdventAndEpiphany : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step03SpecificDaysInAdventAndEpiphany(IRuleApplier ruleApplier, 
            IRulesFactory dataFactory,
            IByDayOfMonthRuleSetApplier ruleSetApplier)
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 3;

        protected override string RuleSetName => "SpecificDaysInAdventAndEpiphany";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, liturgicalYear, ApplicableRules(liturgicalYear.RclYear), new NotWhenSundayRuleException());
        }
    }
}
