using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline
{
    public interface IRuleApplier
    {
        void ApplyRuleToDay(RuleData ruleData, Day day);
    }
}