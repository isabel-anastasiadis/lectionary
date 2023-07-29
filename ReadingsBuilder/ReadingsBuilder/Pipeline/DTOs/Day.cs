using ReadingsBuilder.Model.DTOs;

namespace ReadingsBuilder.Pipeline.DTOs
{

    public enum ReadingsOptionType
    {
        Default,
        EveningBeforeFestival
    }


    public class Day
    {

        public Day()
        {
            MorningReadings = new Option<MorningReadings, ReadingsOptionType>() { OptionOne = new MorningReadings() };
            EveningReadings = new Option<EveningReadings, ReadingsOptionType>() { OptionOne = new EveningReadings() };
        }

        public DateOnly Date { get; set; }

        public string? DayDescription { get; set; }

        /// <summary>
        /// Not necessarily the same as not ordinary time.
        /// When this is true, we use seasonal psalms, and seasonal old testament 2 rotating readings
        /// </summary>
        public bool? IsSeasonalTime { get; set; }

        /// <summary>
        /// We need to know this because some kinds of rules need moving if they fall in particular seasons. Eg. a Sunday in Lent/Advent/Eastertide? In Holy week etc.
        /// </summary>
        public FeastOrSeasonType FeastOrSeasonType { get; set; }


        public Option<MorningReadings, ReadingsOptionType> MorningReadings { get; set; }

        public Option<EveningReadings, ReadingsOptionType> EveningReadings { get; set; }

        /// <summary>
        /// This is true if it doesn't fall in Holy or Easter Week, on another festival, or another Sunday in Advent, Lent, or Eastertide.
        /// </summary>
        public bool CanHaveFestival 
        { 
            get 
            {
                var fallsInHolyWeekOrEasterWeek = (FeastOrSeasonType & FeastOrSeasonType.HolyWeek) != 0 || (FeastOrSeasonType & FeastOrSeasonType.EasterWeek) != 0;
                var fallsOnSundayOfAdventLentOrEastertide = 
                    Date.DayOfWeek == DayOfWeek.Sunday
                    && (FeastOrSeasonType & FeastOrSeasonType.AdventLentOrEastertideMask) != 0;
                var isAlreadyAFestival = (FeastOrSeasonType & FeastOrSeasonType.FeastOrFestivalMask) != 0;

                return !fallsInHolyWeekOrEasterWeek && !fallsOnSundayOfAdventLentOrEastertide & !isAlreadyAFestival;
            } 
        }

        public override string ToString()
        {
            var eveningOptionTwo = EveningReadings.OptionTwo != null ? $" OR {EveningReadings.OptionTwo}" : "";
            return $"{Date} {Date.DayOfWeek} '{DayDescription}' [{MorningReadings?.OptionOne}] [{EveningReadings?.OptionOne}{eveningOptionTwo}]";
        }

    }

}


