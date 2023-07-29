using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps.Utility
{
    public interface IRuleApplier
    {
        void ApplyRuleToDay(RuleData ruleData, Day day, ReadingsOptionType optionType = default);
    }
}