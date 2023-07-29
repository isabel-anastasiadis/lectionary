
namespace ReadingsBuilder.Data.RuleData
{
    public interface IAllDataFactory
    {
        List<Model.RuleData> GenerateAllData(string? csvFilePath = null);
    }
}