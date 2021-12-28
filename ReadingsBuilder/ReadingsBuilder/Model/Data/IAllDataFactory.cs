using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Data
{
    public interface IAllDataFactory
    {
        List<RuleData> GenerateAllData(string? csvFilePath = null);
    }
}