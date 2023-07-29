using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.RuleData
{
    public interface IRuleDataMapper
    {
        List<Model.RuleData> MapRowsToRuleData(List<List<string>> rows);
    }
}