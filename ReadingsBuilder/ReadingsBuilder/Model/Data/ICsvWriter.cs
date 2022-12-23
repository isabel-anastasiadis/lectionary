
namespace ReadingsBuilder.Model.Data
{
    public interface ICsvWriter
    {
        void WriteToCSV(List<List<string>> rows, string filePath, bool overwrite);
    }
}