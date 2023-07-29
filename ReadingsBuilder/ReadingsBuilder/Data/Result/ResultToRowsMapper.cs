

using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Data.Result
{
    public class ResultToRowsMapper : IResultToRowsMapper
    {

        public List<List<string>> Map(Dictionary<DateOnly, Option<Day, DayOptionType>> result)
        {
            var rows = new List<List<string>>();

            rows.Add(new List<string> {
                "date",
                "date_pretty",
                "day_description",
                "morning_prayers_together",
                "evening_prayers_together"
            });

            foreach (var date in result.Keys)
            {
                var row = new List<string>();
                var day = result[date].OptionOne;

                if (day == null)
                {
                    throw new ArgumentException($"Didn't expect the day for {date} to be null");
                }

                row.Add(MapDate(day.Date));

                row.Add(MapPrettyDate(day.Date));

                row.Add(day.DayDescription ?? String.Empty);

                row.Add(MapMorningReadings(day.MorningReadings));

                row.Add(MapEveningReadings(day.EveningReadings));

                rows.Add(row);

            }

            return rows;
        }

        private string MapDate(DateOnly date)
        {
            return string.Format("{0:yyyy/MM/dd}", date);
        }

        private string MapPrettyDate(DateOnly date)
        {
            return String.Format("{0:dddd, MMMM d, yyyy}", date);


        }

        private string MapMorningReadings(Option<MorningReadings, ReadingsOptionType>? morningReadings)
        {

            var psalm = $"{morningReadings?.OptionOne?.Psalms?.OptionOne?.RawString}";
            var oldTestament = $"{morningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString}";
            var newTestament = $"{morningReadings?.OptionOne?.NewTestament?.OptionOne?.RawString}";
            return $"{psalm}; {oldTestament}; {newTestament}";
        }

        private string MapEveningReadings(Option<EveningReadings, ReadingsOptionType>? eveningReadings)
        {
            var psalm = $"{eveningReadings?.OptionOne?.Psalms?.OptionOne?.RawString}";
            var oldTestament = $"{eveningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString}";
            var newTestament = $"{eveningReadings?.OptionOne?.NewTestament?.OptionOne?.RawString}";
            return $"{psalm}; {oldTestament}; {newTestament}";
        }
    }
}
