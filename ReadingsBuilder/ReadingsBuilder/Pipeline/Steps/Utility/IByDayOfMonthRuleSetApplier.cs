using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfMonthRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<Rule> applicableRules);

        void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, Rule rule, DateOnly? dateOverride = null);
    }
}