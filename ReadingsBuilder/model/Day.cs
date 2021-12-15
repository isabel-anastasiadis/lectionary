using ReadingsBuilder.Model;

namespace ReadingsBuilder.Model
{

    public enum DayOptionType {
        None,
        CelebrateOnOriginalDay,
        CelebrateOnClosestSunday
    }


    public class Day {
        public DateOnly Date {get; set;}

        public string? DayDescription {get; set;}

        public Option<MorningReadings, DayOptionType>? MorningReadings {get; set;}

        public Option<EveningReadings, DayOptionType>? EveningReadings {get; set;}

    }

}


