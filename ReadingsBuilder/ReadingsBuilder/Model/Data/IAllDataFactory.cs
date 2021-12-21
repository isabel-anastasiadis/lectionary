namespace ReadingsBuilder.Model.Data
{
    public interface IAllDataFactory
    {
        AllData GenerateAllData(string? csvFilePath = null);
    }
}