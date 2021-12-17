
using Microsoft.VisualBasic.FileIO;
using ReadingsBuilder.Model.Data;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class RuleDataReader
    {

        public Dictionary<string, RuleData> ReadData(string? pathToFile = null)
        {

            using (TextFieldParser parser = new TextFieldParser( pathToFile ?? RuleData.DEFAULT_CSV_FILE_PATH))
            {
                parser.TextFieldType = FieldType.Delimited;
                parser.SetDelimiters(",");

                var row = 1;
                while (!parser.EndOfData)
                {
                    if (row++ == 1) {
                        break;
                    }

                    //Process row
                    string[] fields = parser.ReadFields() ?? new string[0];
                    
                }
            }

            return new Dictionary<string, RuleData>();
        }



        private Weekday? MapWeekday(string weekdayString) {

            switch (weekdayString)
            {
                case "":
                    return null;

                case "M":
                    return Weekday.Monday;

                case "T": 
                    return Weekday.Tuesday;

                case "W":
                    return Weekday.Wednesday;

                case "Th":
                    return Weekday.Thursday;
                case "F": 
                    return Weekday.Friday;

                case "S":
                    return Weekday.Saturday;

                case "Su":
                    return Weekday.Sunday;

                default:
                    return Weekday.Unknown;
            }


        }

        private RuleType MapRuleType(string ruleTypeString) {
            switch (ruleTypeString)
            {
                case "ByDayOfWeek":
                    return RuleType.ByDayOfWeek;

                case "ByDayOfMonth": 
                    return RuleType.ByDayOfMonth;

                default:
                    return RuleType.Unknown;
            }

        }
    }
}
