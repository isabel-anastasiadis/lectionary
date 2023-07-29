using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IRuleApplier
    {
        void ApplyRuleToDay(Rule Rules, Day day, ReadingsOptionType optionType = default);
    }
}