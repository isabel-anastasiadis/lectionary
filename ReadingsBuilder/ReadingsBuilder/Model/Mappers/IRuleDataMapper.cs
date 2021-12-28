
using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Mappers
{
    public interface IRuleDataMapper
    {
        List<RuleData> MapRowsToRuleData(List<List<string>> rows);
    }
}