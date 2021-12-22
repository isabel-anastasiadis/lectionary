namespace ReadingsBuilder.Model.Data.DTOs
{
    public class RotatingReadingMapping
    {

        public int Year { get; set; }

        public RotatingReadingType MorningOldTestamentOrdinary { get; set; }

        public RotatingReadingType MorningOldTestamentSeasonal { get; set; }

        public RotatingReadingType MorningNewTestament { get; set; }

        public RotatingReadingType EveningOldTestamentOrdinary { get; set; }

        public RotatingReadingType EveningOldTestamentSeasonal { get; set; }

        public RotatingReadingType EveningNewTestament { get; set; }

    }
}
