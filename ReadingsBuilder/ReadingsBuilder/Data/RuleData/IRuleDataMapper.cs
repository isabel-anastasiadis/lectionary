using ReadingsBuilder.Model.DTOs;

namespace ReadingsBuilder.Data.RuleData
{
    public interface IRuleDataMapper
    {
        List<Model.DTOs.RuleData> MapRowsToRuleData(List<List<string>> rows);
    }
}