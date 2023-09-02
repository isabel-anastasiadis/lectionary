namespace ReadingsBuilder.Model
{
    public class LiturgicalYear
    {
        public DateOnly FirstDay { get; set; }

        public DateOnly LastDay { get; set; }

        // TODO add easter sunday dates too.  Can get from https://www.assa.org.au/edm/#List20
        // TODO load all from CSV
        public RclYear RclYear { get; set; }

        public RotatingReadingType MorningOldTestamentOrdinary { get; set; }

        public RotatingReadingType MorningOldTestamentSeasonal { get; set; }

        public RotatingReadingType MorningNewTestament { get; set; }

        public RotatingReadingType EveningOldTestamentOrdinary { get; set; }

        public RotatingReadingType EveningOldTestamentSeasonal { get; set; }

        public RotatingReadingType EveningNewTestament { get; set; }

    }
}
