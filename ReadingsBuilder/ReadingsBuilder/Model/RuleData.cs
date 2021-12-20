
namespace ReadingsBuilder.Model
{
    public class RuleData
    {
        public RuleData()
        {
            RotatingReadings = new Dictionary<RotatingReadingType, string>();
        }

        public string? HandlingClassName { get; set; }

        public int? RowNumberInRuleSet { get; set; }

        public RuleType? RuleType { get; set; }

        public string? DayName { get; set; }

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
                return RotatingReadings[RotatingReadingType.OldTestament1] != null && 
                    RotatingReadings[RotatingReadingType.NewTestament1] != null &&  // 2a is empty when it is seasonal time (so I'm excluding it from the check)
                    RotatingReadings[RotatingReadingType.OldTestament2b] != null &&
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

        public override string ToString()
        {
            return $"RuleData: {RowNumberInRuleSet}, {HandlingClassName}, {RuleType}, {DayName}, ...";
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

    public enum RuleType { 
        Unknown,
        ByDayOfWeek,
        ByDayOfMonth
    }

}
