using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps.Utility
{
    public interface IByDayOfMonthRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<RuleData> applicableRules);

        void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, RuleData rule, DateOnly? dateOverride = null);
    }
}