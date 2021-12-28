
namespace ReadingsBuilder.Model.Data
{
    public interface ICsvReader
    {
        List<List<string>> ReadRows(string pathToFile);
    }
}