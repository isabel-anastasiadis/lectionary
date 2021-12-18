namespace ReadingsBuilder.Model
{
    public class Year {

        public enum DayOptionType
        {
            None,
            CelebrateOnOriginalDay,
            CelebrateOnClosestSunday
        }

        public Year()
        {
            Days = new Dictionary<DateOnly, Option<Day, DayOptionType>>();
        }

        public Dictionary<DateOnly, Option<Day, DayOptionType>>? Days {get; }


    }

}
