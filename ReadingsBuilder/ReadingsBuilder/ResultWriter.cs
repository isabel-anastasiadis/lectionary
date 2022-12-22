
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder
{
    public class ResultWriter : IResultWriter
    {
        public const string DefaultFilePath = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\";

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

            csvWriter.WriteToCSV(resultToRowsMapper.Map(result.Result), filePath, overwrite);

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
