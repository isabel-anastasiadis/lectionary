namespace ReadingsBuilder.Model.Pipeline
{
    public interface IRuleApplier
    {
        void ApplyPsalms(RuleData ruleData, Day day);
        void ApplyRuleToDay(RotatingReadingMapping rotatingReadingMapping, 
            RuleData ruleData, 
            Day day);
    }
}