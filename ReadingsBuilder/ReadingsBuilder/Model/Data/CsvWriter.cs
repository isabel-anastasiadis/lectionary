
using System.Text;


namespace ReadingsBuilder.Model.Data
{
    public class CsvWriter : ICsvWriter
    {

        public void WriteToCSV(List<List<string>> rows, string filePath, bool overwrite)
        {

            var csv = new StringBuilder();
            var escapedRows = new List<List<string>>();
            // first escape commas
            foreach (var row in rows)
            {
                var escapedRow = new List<string>();

                foreach (var column in row)
                {

                    if (column.Contains(','))
                    {
                        escapedRow.Add($"\"{column.Trim()}\"");
                    }
                    else
                    {
                        escapedRow.Add(column.Trim());
                    }

                }
                escapedRows.Add(escapedRow);
            }

            // then write
            foreach (var row in escapedRows)
            {
                csv.AppendLine(String.Join(",", row));
            }

            if (overwrite)
            {
                File.WriteAllText(filePath, csv.ToString());
            }
            else 
            {
                File.AppendAllText(filePath, csv.ToString());
            }
        }
    }
}
