
using System.Text;


namespace ReadingsBuilder.Model.Data
{
    public class CsvWriter
    {

        public void WriteToCSV(List<List<string>> rows, string filePath) {

            var csv = new StringBuilder();
            var escapedRows = new List<List<string>>();
            // first escape commas
            foreach (var row in rows)
            {
                var escapedRow = new List<string>();

                foreach (var column in row) {

                    if (column.Contains(','))
                    {
                        escapedRow.Add($"\"{column}\"");
                    }
                    else { 
                        escapedRow.Add(column);
                    }
                
                }
                escapedRows.Add(escapedRow);
            }

            // then write
            foreach (var row in escapedRows)
            {
                csv.AppendLine(String.Join(",", row));
            }

            File.WriteAllText(filePath, csv.ToString());
        
        }
    }
}
