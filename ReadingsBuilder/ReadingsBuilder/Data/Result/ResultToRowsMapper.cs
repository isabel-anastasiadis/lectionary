﻿

using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;

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
                "evening_name",
                "rcl_track_1_short_name_override",
                "rcl_track_1_full_name_override",
                "rcl_track_1_note",
                "rcl_track_1",
                "rcl_track_2_short_name_override",
                "rcl_track_2_full_name_override",
                "rcl_track_2_note",
                "rcl_track_2",
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

                row.Add(day.DayDescription ?? string.Empty);

                row.Add(day.EveningName ?? string.Empty);

                row.Add(day.RclTrack1ShortNameOverride ?? string.Empty);

                row.Add(day.RclTrack1FullNameOverride ?? string.Empty);

                row.Add(day.RclTrack1Note ?? string.Empty);

                row.Add(MapRclReadings(day.RclTrack1Readings));

                row.Add(day.RclTrack2ShortNameOverride ?? string.Empty);

                row.Add(day.RclTrack2FullNameOverride ?? string.Empty);

                row.Add(day.RclTrack2Note ?? string.Empty);

                row.Add(MapRclReadings(day.RclTrack2Readings));

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

        private string MapRclReadings(Option<RclReadings, ReadingsOptionType>? rclReadings)
        {
            if (rclReadings?.OptionOne == null || rclReadings.OptionOne.IsEmpty())
            {
                return string.Empty;
            }

            return rclReadings.OptionOne.ToString();
        }
    }
}
