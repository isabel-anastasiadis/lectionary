using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IRuleApplier
    {
        void ApplyRuleToDay(Rule rule, Day day, ReadingsOptionType optionType = default);
    }
}