
namespace ReadingsBuilder.Data.Utilities
{
    public interface ICsvReader
    {
        List<List<string>> ReadRows(string pathToFile);
    }
}