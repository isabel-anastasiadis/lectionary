
namespace ReadingsBuilder.Model.Data
{
    public class RuleData
    {

        public string? HandlingClassName { get; set; }

        public int? RowNumberInRuleSet { get; set; }

        public RuleType? RuleType { get; set; }

        public string? DayName { get; set; }

        public Weekday? Weekday {get; set;}

        public int? Day { get; set; }

        public int? Month { get; set; }

        public string? RotatingOldTestament1 { get; set; }

        public string? RotatingOldTestament2a { get; set; }

        public string? RotatingOldTestament2b { get; set; }

        public string? RotatingNewTestament1 { get; set; }

        public string? RotatingNewTestament2 { get; set; }

        public string? MorningOldTestament { get; set; }

        public string? MorningNewTestament { get; set; }

        public string? EveningOldTestament { get; set; }

        public string? EveningNewTestament { get; set; }

        public string? MorningPsalmsMain { get; set; }
       
        public string? EveningPsalmsMain { get; set; }

        public override string ToString()
        {
            return $"RuleData: {RowNumberInRuleSet}, {HandlingClassName}, {RuleType}, {DayName}, ...";
        }

    }

    public enum RuleType { 
        Unknown,
        ByDayOfWeek,
        ByDayOfMonth
    }

    public enum Weekday {
        Unknown,
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }
}
