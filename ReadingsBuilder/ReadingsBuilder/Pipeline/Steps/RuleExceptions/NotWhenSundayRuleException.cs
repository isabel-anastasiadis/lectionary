
namespace ReadingsBuilder.Pipeline.Steps.RuleExceptions
{
    public class NotWhenSundayRuleException: IRuleException
    {
        public bool ShouldSkip(DateOnly date)
        {
            return date.DayOfWeek == DayOfWeek.Sunday;
        }
    }
}
