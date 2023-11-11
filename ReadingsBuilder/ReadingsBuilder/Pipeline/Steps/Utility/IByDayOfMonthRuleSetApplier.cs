using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfMonthRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, List<Rule> applicableRules);

        void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, Rule rule, DateOnly? dateOverride = null);
    }
}