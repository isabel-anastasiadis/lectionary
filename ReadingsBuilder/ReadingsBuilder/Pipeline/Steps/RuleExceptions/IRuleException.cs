
namespace ReadingsBuilder.Pipeline.Steps.RuleExceptions
{
    public interface IRuleException
    {
        bool ShouldSkip(DateOnly date);
    }
}
