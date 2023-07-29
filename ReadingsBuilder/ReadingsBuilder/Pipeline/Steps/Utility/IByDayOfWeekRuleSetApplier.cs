using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfWeekRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult, 
            List<Rule> applicableRules, 
            DateOnly dateOfFirstDayRuleAppliesTo, 
            Rule? RulesToStartWith, 
            DateOnly? dateOfLastDayRuleAppliesTo,
            bool rulesLoopAround = false);
    }
}