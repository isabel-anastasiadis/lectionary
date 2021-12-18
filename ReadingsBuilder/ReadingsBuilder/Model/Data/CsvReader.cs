using Microsoft.VisualBasic.FileIO;

namespace ReadingsBuilder.Model.Data
{

    public class CsvReader {

        // todo move this somewhere else
        public static string DEFAULT_CSV_FILE_PATH = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\All Rules.csv";

        public List<List<string>> ReadRows(string? pathToFile = null)
        {
            var result = new List<List<string>>();
            using (TextFieldParser parser = new TextFieldParser( pathToFile ?? CsvReader.DEFAULT_CSV_FILE_PATH))
            {
                parser.TextFieldType = FieldType.Delimited;
                parser.SetDelimiters(",");

                var row = 1;
                while (!parser.EndOfData)
                {


                    //Process row
                    var fields = (parser.ReadFields() ?? new string[0]).ToList<string>();
                    if (row++ == 1)
                    {
                        continue;
                    }
                    result.Add(fields);

                    
                }
            }

            return result;
        }
    }

}