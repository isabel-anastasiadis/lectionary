
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Data.Utilities;

namespace ReadingsBuilder.Data.Result
{
    public class ResultWriter : IResultWriter
    {
        public static readonly string DefaultFilePath = DirectoryHelper.SolutionDirectory + @"\ReadingsBuilder\Data\Result";

        private readonly ICsvWriter csvWriter;
        private readonly IResultToRowsMapper resultToRowsMapper;

        public ResultWriter(ICsvWriter csvWriter, IResultToRowsMapper resultToRowsMapper)
        {
            this.csvWriter = csvWriter;
            this.resultToRowsMapper = resultToRowsMapper;
        }

        public void WriteResult(PipelineWorkingResult result, string filename, bool overwrite, bool logToConsole = false, string? folderPath = null)
        {
            var filePath = Path.Combine(folderPath ?? DefaultFilePath, filename);

            var csvString = csvWriter.WriteToCSV(resultToRowsMapper.Map(result.Result));

            if (overwrite)
            {
                File.WriteAllText(filePath, csvString);
            }
            else
            {
                File.AppendAllText(filePath, csvString);
            }

            if (logToConsole)
            {
                foreach (var key in result.Result.Keys)
                {
                    var day = result.Result[key];
                    Console.WriteLine(day.OptionOne);
                }
            }
        }

    }
}
