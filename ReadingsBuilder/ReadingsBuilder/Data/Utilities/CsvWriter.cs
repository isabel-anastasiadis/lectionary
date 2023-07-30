
using System.Text;


namespace ReadingsBuilder.Data.Utilities
{
    public class CsvWriter : ICsvWriter
    {

        public string WriteToCSV(List<List<string>> rows)
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

            return csv.ToString();
        }
    }
}
