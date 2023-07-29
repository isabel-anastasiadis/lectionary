using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps.Utility
{
    public interface IByDayOfWeekRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult, 
            List<RuleData> applicableRules, 
            DateOnly dateOfFirstDayRuleAppliesTo, 
            RuleData? ruleDataToStartWith, 
            DateOnly? dateOfLastDayRuleAppliesTo,
            bool rulesLoopAround = false);
    }
}