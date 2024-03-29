using Microsoft.VisualBasic.FileIO;

namespace ReadingsBuilder.Data.Utilities
{

    public class CsvReader : ICsvReader
    {

        public List<List<string>> ReadRows(string pathToFile)
        {
            var result = new List<List<string>>();
            using (TextFieldParser parser = new TextFieldParser(pathToFile))
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