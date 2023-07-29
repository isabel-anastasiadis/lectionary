
namespace ReadingsBuilder.Data.RuleData
{
    public interface IAllDataFactory
    {
        List<Model.DTOs.RuleData> GenerateAllData(string? csvFilePath = null);
    }
}