using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfMonthRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<RuleData> applicableRules);

        void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, RuleData rule, DateOnly? dateOverride = null);
    }
}