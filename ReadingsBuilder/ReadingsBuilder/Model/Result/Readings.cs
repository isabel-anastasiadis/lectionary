namespace ReadingsBuilder.Model.Result
{

    public enum ReadingOptionType
    {
        Default
    }

    public class RclReadings
    {
        public RclReadings() {
            Psalms = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            Canticle = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            OldTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            NewTestament = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
            Gospel = new Option<Reading, ReadingOptionType>() { OptionOne = new Reading() };
        }

        public Option<Reading, ReadingOptionType>? Psalms { get; set; }

        public Option<Reading, ReadingOptionType>? Canticle { get; set; }

        public Option<Reading, ReadingOptionType>? OldTestament { get; set; }

        public Option<Reading, ReadingOptionType>? NewTestament { get; set; }

        public Option<Reading, ReadingOptionType>? Gospel { get; set; }

        public bool IsEmpty()
        {
            return (Psalms?.OptionOne == null || Psalms.OptionOne.IsEmpty())
                && (Canticle?.OptionOne == null || Canticle.OptionOne.IsEmpty())
                && (OldTestament?.OptionOne == null || OldTestament.OptionOne.IsEmpty())
                && (NewTestament?.OptionOne == null || NewTestament.OptionOne.IsEmpty())
                && (Gospel?.OptionOne == null || Gospel.OptionOne.IsEmpty());
        }

        public override string ToString()
        {
            if (IsEmpty())
                return string.Empty;

            var hasPsalm = Psalms?.OptionOne != null && Psalms.OptionOne != null && !Psalms.OptionOne.IsEmpty();
            var hasCanticle = Canticle?.OptionOne != null && Canticle.OptionOne != null && !Canticle.OptionOne.IsEmpty();

            string psalms = string.Empty;
            if (!hasPsalm && hasCanticle)
            {
                psalms = $"{Canticle.OptionOne}";
            }
            else if (hasPsalm && hasCanticle)
            {
                psalms = $"{Psalms.OptionOne}; {Canticle.OptionOne}";
            }
            else 
            {
                psalms = $"{Psalms.OptionOne}";
            }
            

            return $"{psalms.Trim()}; {OldTestament?.OptionOne}; {NewTestament?.OptionOne}; {Gospel?.OptionOne}";
        }
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

        public bool IsEmpty() 
        { 
            return RawString == null;
        }

        public override string ToString()
        {
            return $"{RawString}";
        }

    }

}