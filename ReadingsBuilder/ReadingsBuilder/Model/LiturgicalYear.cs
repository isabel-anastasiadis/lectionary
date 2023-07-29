namespace ReadingsBuilder.Model
{
    public class LiturgicalYear
    {
        public DateOnly FirstDay { get; set; }

        public DateOnly LastDay { get; set; }

        public RotatingReadingType MorningOldTestamentOrdinary { get; set; }

        public RotatingReadingType MorningOldTestamentSeasonal { get; set; }

        public RotatingReadingType MorningNewTestament { get; set; }

        public RotatingReadingType EveningOldTestamentOrdinary { get; set; }

        public RotatingReadingType EveningOldTestamentSeasonal { get; set; }

        public RotatingReadingType EveningNewTestament { get; set; }

    }
}
