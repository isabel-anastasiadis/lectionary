namespace ReadingsBuilder.Model
{
    public class Rule
    {
        public Rule()
        {
            RotatingReadings = new Dictionary<RotatingReadingType, string?>();
        }

        public string? HandlingClassName { get; set; }

        public int? RowNumberInRuleSet { get; set; }

        public RuleType? RuleType { get; set; }

        public FeastOrSeasonType FeastOrSeasonFlags { get; set; }

        public string? DayName { get; set; }

        public string? EveningName { get; set; }

        /// <summary>
        /// This basically determines whether we are
        /// 1. Ignoring Old Testament 2 readings, and 
        /// 2. Using seasonal psalms instead of the normal psalm rotation.
        /// </summary>
        public bool? IsSeasonalTime { get; set; }

        public RclYear RclYear { get; set; }

        public DayOfWeek? Weekday { get; set; }

        public int? Day { get; set; }

        public int? Month { get; set; }

        public int? Year { get; set; }

        public Dictionary<RotatingReadingType, string?> RotatingReadings { get; set; }

        public string? MorningOldTestament { get; set; }

        public string? MorningNewTestament { get; set; }

        public string? EveningOldTestament { get; set; }

        public string? EveningNewTestament { get; set; }

        public string? MorningPsalmsMain { get; set; }

        public string? EveningPsalmsMain { get; set; }

        public string? RclTrack1Psalm { get; set; }

        /// <summary>
        /// NOTE: sometimes there isn't a psalm, and instead there is a canticle.
        /// 
        /// Format example: "Canticle: [reading] ([optional canticle common name])"
        /// </summary>
        public string? RclTrack1Canticle { get; set; }

        public string? RclTrack1OldTestament { get; set; }

        public string? RclTrack1NewTestament { get; set; }

        public string? RclTrack1Gospel { get; set; }

        public string? RclTrack2Psalm { get; set; }

        /// <summary>
        /// NOTE: sometimes there isn't a psalm, and instead there is a canticle.
        /// 
        /// Format example: "Canticle: [reading] ([optional canticle common name])"
        /// </summary>
        public string? RclTrack2Canticle { get; set; }

        public string? RclTrack2OldTestament { get; set; }

        public string? RclTrack2NewTestament { get; set; }

        public string? RclTrack2Gospel { get; set; }

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
            return $"Rules: {RowNumberInRuleSet}, {HandlingClassName}, {RuleType}, {DayName}, ...";
        }

    }

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

        Festival = 16,
        HolyWeek = 32,
        PrincipalHolyDay = 64,
        PrincipalFeast = 128,

        EveningBeforeFestival = 256,
        EveningBeforePrincipalHolyDay = 512,
        EveningBeforePrincipalFeast = 1024,

        AdventLentOrEastertideMask = Advent | Lent | Eastertide,
        EveningBeforeMask = EveningBeforeFestival | EveningBeforePrincipalFeast | EveningBeforePrincipalHolyDay,
        FeastOrFestivalMask = Festival | PrincipalFeast | PrincipalHolyDay,
        HolyOrEasterWeekMask = HolyWeek | EasterWeek,
    }

    public static class FeastOrSeasonTypeExtensions
    {
        public static bool HasFlag(this FeastOrSeasonType feastOrSeasonFlags, FeastOrSeasonType typeToCheckFor)
        { 
            return (feastOrSeasonFlags & typeToCheckFor) == typeToCheckFor;
        }
    }

    public enum RclYear
    { 
        All = 0,
        A = 1,
        B = 2,
        C = 3
    }

}
