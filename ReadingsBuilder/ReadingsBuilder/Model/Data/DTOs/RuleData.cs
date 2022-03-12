namespace ReadingsBuilder.Model.Data.DTOs
{
    public class RuleData
    {
        public RuleData()
        {
            RotatingReadings = new Dictionary<RotatingReadingType, string?>();
        }

        public string? HandlingClassName { get; set; }

        public int? RowNumberInRuleSet { get; set; }

        public RuleType? RuleType { get; set; }

        public FeastOrSeasonType FeastOrSeasonFlags { get; set; }

        public string? DayName { get; set; }

        public string? EveningName { get; set; }

        public bool? IsSeasonalTime { get; set; }

        public DayOfWeek? Weekday { get; set; }

        public int? Day { get; set; }

        public int? Month { get; set; }

        public Dictionary<RotatingReadingType, string?> RotatingReadings { get; set; }

        public string? MorningOldTestament { get; set; }

        public string? MorningNewTestament { get; set; }

        public string? EveningOldTestament { get; set; }

        public string? EveningNewTestament { get; set; }

        public string? MorningPsalmsMain { get; set; }

        public string? EveningPsalmsMain { get; set; }

        public bool HasRotatingReadings
        {
            get
            {
                if (RotatingReadings.Count == 0) return false;

                return
                    RotatingReadings[RotatingReadingType.OldTestament1] != null &&
                    RotatingReadings[RotatingReadingType.NewTestament1] != null &&  // 2b is empty when it is seasonal time (so I'm excluding it from the check)
                    RotatingReadings[RotatingReadingType.OldTestament2a] != null &&
                    RotatingReadings[RotatingReadingType.NewTestament2] != null;

            }
        }

        public bool HasSetReadings
        {
            get
            {
                return MorningOldTestament != null &&
                    MorningNewTestament != null &&
                    EveningOldTestament != null &&
                    EveningNewTestament != null;
            }
        }

        public bool HasSetEveningOverrides
        {
            get
            {
                return MorningOldTestament == null &&
                    MorningNewTestament == null &&
                    EveningOldTestament != null &&
                    EveningNewTestament != null;
            }
        }

        public bool HasMorningPsalms
        {

            get
            {
                return !string.IsNullOrWhiteSpace(MorningPsalmsMain);
            }
        }

        public bool HasEveningPsalms
        {

            get
            {
                return !string.IsNullOrWhiteSpace(EveningPsalmsMain);
            }
        }

        public override string ToString()
        {
            return $"RuleData: {RowNumberInRuleSet}, {HandlingClassName}, {RuleType}, {DayName}, ...";
        }

    }
}

namespace ReadingsBuilder.Model
{
    public enum RotatingReadingType
    {
        OldTestament1,
        OldTestament2a,
        OldTestament2b,
        NewTestament1,
        NewTestament2
    }

    public enum RuleType
    {
        Unknown,
        ByDayOfWeek,
        ByDayOfMonth
    }

    [Flags]
    public enum FeastOrSeasonType
    { 
        None = 0,
        Advent = 1,
        Lent = 2,
        Eastertide = 4,
        EasterWeek = 8,

        EveningBefore = 16, // TODO convert to an option

        Festival = 32,
        HolyWeek = 64,
        PrincipalHolyDay = 128,
        PrincipalFeast = 256,


        FeastOrFestivalMask = Festival | PrincipalFeast | PrincipalHolyDay,
        AdventLentOrEastertideMask = Advent | Lent | Eastertide


    }

}
