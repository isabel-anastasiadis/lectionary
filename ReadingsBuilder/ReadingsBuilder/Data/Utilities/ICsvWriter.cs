
namespace ReadingsBuilder.Data.Utilities
{
    public interface ICsvWriter
    {
        string WriteToCSV(List<List<string>> rows);
    }
}