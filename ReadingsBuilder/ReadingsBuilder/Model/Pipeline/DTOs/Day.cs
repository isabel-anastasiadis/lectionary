namespace ReadingsBuilder.Model.Pipeline.DTOs
{

    public enum ReadingsOptionType
    {
        Default
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
        /// There are some feast days that don't happen if they fall on Holy Week.
        /// </summary>
        public bool? IsHolyWeek { get; set; }

        public Option<MorningReadings, ReadingsOptionType> MorningReadings { get; set; }

        public Option<EveningReadings, ReadingsOptionType> EveningReadings { get; set; }

        public override string ToString()
        {
            return $"{Date} {Date.DayOfWeek} '{DayDescription}' [{MorningReadings?.OptionOne}] [{EveningReadings?.OptionOne}]";
        }

    }

}


