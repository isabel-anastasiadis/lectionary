namespace ReadingsBuilder.Model.Result
{

    public enum ReadingOptionType
    {
        Default
    }

    public class MorningReadings
    {

        public MorningReadings()
        {
            Psalms = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            OldTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            NewTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
        }

        public Option<Reading, ReadingOptionType>? Psalms { get; set; }

        public Option<Reading, ReadingOptionType>? OldTestament { get; set; }

        public Option<Reading, ReadingOptionType>? NewTestament { get; set; }

        public override string ToString()
        {
            return $"{Psalms?.OptionOne}; {OldTestament?.OptionOne}; {NewTestament?.OptionOne};";
        }
    }

    public class EveningReadings
    {

        public EveningReadings()
        {
            Psalms = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            OldTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            NewTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
        }


        // Often the readings for the evening before a feast/festival are also themed
        public string? ReadingsDescription { get; set; }

        public Option<Reading, ReadingOptionType>? Psalms { get; set; }

        public Option<Reading, ReadingOptionType>? OldTestament { get; set; }

        public Option<Reading, ReadingOptionType>? NewTestament { get; set; }

        public override string ToString()
        {
            var extraDescription = ReadingsDescription != null ? $"({ReadingsDescription})" : "";

            return $"{extraDescription}{Psalms?.OptionOne}; {OldTestament?.OptionOne}; {NewTestament?.OptionOne};";
        }
    }


    public class Reading
    {

        public string? RawString { get; set; }

        public bool IsOptional { get; set; }

        public override string ToString()
        {
            return $"{RawString}";
        }

    }

}