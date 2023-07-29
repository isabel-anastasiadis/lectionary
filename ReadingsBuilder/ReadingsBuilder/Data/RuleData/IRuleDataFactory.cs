
namespace ReadingsBuilder.Data.RuleData
{
    public interface IRuleDataFactory
    {
        List<Model.RuleData> GenerateAllData(string? csvFilePath = null);
    }
}