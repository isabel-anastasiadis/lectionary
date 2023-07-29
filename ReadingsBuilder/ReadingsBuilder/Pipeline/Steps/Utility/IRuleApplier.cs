using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Pipeline.DTOs;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IRuleApplier
    {
        void ApplyRuleToDay(RuleData ruleData, Day day, ReadingsOptionType optionType = default);
    }
}