using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.RuleExceptions;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfMonthRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, List<Rule> applicableRules, IRuleException? ruleException = null);

        void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, Rule rule, ApplyToOption applyTo, IRuleException? ruleException = null, DateOnly ? dateOverride = null);
    }
}