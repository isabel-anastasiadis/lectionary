
namespace ReadingsBuilder.Data.Rules
{
    public interface IRulesFactory
    {
        List<Model.Rule> GenerateAllData(string? csvFilePath = null);
    }
}