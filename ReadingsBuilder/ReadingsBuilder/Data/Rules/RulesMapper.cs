using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Rules
{
    /// <summary>
    /// The order of columns in 'All Rules.csv'
    /// </summary>
    public enum ColumnIndexes
    {
        RuleClassOrder = 0,
        RuleClassName, 
        RuleType,
        RowWithinClass,
        ExtraData,
        FeastDaySeasonType,
        EveningName,
        DayName,
        IsSeasonalTime,
        ByDayOfWeekRclYear,
        ByDayOfWeekWeekday,
        ByDayOfMonthYear,
        ByDayOfMonthMonth,
        ByDayOfMonthDay,
        RotatingOldTestament1,
        RotatingOldTestament2a,
        RotatingOldTestament2b,
        RotatingNewTestament1,
        RotatingNewTestament2,
        MorningApocryphalAlternative,
        MorningOldTestament,
        MorningOldTestamentAlternative,
        MorningNewTestament,
        MorningNewTestamentAlternative,
        EveningApocryphalAlternative,
        EveningOldTestament,
        EveningOldTestamentAlternative,
        EveningNewTestament,
        EveningNewTestamentAlternative,
        EveningGospelForCommunion,
        MorningPsalmMain,
        MorningPsalmOptional,
        MorningPsalmAlternative,
        MorningPsalmOmittedIfCanticle,
        EveningPsalmMain,
        EveningPsalmOptional,
        EveningPsalmAlternative,
        EveningPsalmOmittedIfCanticle,
        RclTrack1Other,
        RclTrack1Apocryphal,
        RclTrack1OldTestament,
        RclTrack1OldTestamentAlternative,
        RclTrack1Psalm,
        RclTrack1PsalmAlternative,
        RclTrack1Canticle,
        RclTrack1ApocryphalCanticle,
        RclTrack1NewTestament,
        RclTrack1NewTestamentAlternative,
        RclTrack1Gospel,
        RclTrack1GospelAlternative,
        RclTrack2Other,
        RclTrack2Apocryphal,
        RclTrack2OldTestament,
        RclTrack2OldTestamentAlternative,
        RclTrack2Psalm,
        RclTrack2PsalmAlternative,
        RclTrack2Canticle,
        RclTrack2ApocryphalCanticle,
        RclTrack2NewTestament,
        RclTrack2NewTestamentAlternative,
        RclTrack2Gospel,
        RclTrack2GospelAlternative
    }

    public class RulesMapper : IRulesMapper
    {

        public List<Rule> MapRowsToRules(List<List<string>> rows)
        {

            var result = new List<Rule>();

            foreach (var row in rows)
            {

                var rule = new Rule()
                {
                    HandlingClassName = GetValueOrNull(row, ColumnIndexes.RuleClassName),
                    DayName = GetValueOrNull(row, ColumnIndexes.DayName),
                    EveningName = GetValueOrNull(row, ColumnIndexes.EveningName),
                    Weekday = MapWeekday(GetValueOrNull(row, ColumnIndexes.ByDayOfWeekWeekday)),
                    IsSeasonalTime = MapIsSeasonalTime(GetValueOrNull(row, ColumnIndexes.IsSeasonalTime)),
                    RclYear = MapRclYear(GetValueOrNull(row, ColumnIndexes.ByDayOfWeekRclYear)),
                    FeastOrSeasonFlags = MapFeastOrSeasonType(GetValueOrNull(row, ColumnIndexes.FeastDaySeasonType)),
                    MorningOldTestament = GetValueOrNull(row, ColumnIndexes.MorningOldTestament),
                    MorningNewTestament = GetValueOrNull(row, ColumnIndexes.MorningNewTestament),
                    EveningOldTestament = GetValueOrNull(row, ColumnIndexes.EveningOldTestament),
                    EveningNewTestament = GetValueOrNull(row, ColumnIndexes.EveningNewTestament),
                    MorningPsalmsMain = GetValueOrNull(row, ColumnIndexes.MorningPsalmMain),
                    EveningPsalmsMain = GetValueOrNull(row, ColumnIndexes.EveningPsalmMain),
                    RclTrack1Psalm = GetValueOrNull(row, ColumnIndexes.RclTrack1Psalm),
                    RclTrack1Canticle = GetValueOrNull(row, ColumnIndexes.RclTrack1Canticle),
                    RclTrack1OldTestament = GetValueOrNull(row, ColumnIndexes.RclTrack1OldTestament),
                    RclTrack1NewTestament = GetValueOrNull(row, ColumnIndexes.RclTrack1NewTestament),
                    RclTrack1Gospel = GetValueOrNull(row, ColumnIndexes.RclTrack1Gospel),
                };

                rule.RotatingReadings[RotatingReadingType.OldTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament1);
                rule.RotatingReadings[RotatingReadingType.OldTestament2a] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2a);
                rule.RotatingReadings[RotatingReadingType.OldTestament2b] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2b);
                rule.RotatingReadings[RotatingReadingType.NewTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament1);
                rule.RotatingReadings[RotatingReadingType.NewTestament2] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament2);

                if (int.TryParse(row[(int)ColumnIndexes.RowWithinClass], out int rowWithinClass))
                {
                    rule.RowNumberInRuleSet = rowWithinClass;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthYear], out int year))
                {
                    rule.Year = year;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthMonth], out int month))
                {
                    rule.Month = month;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthDay], out int day))
                {
                    rule.Day = day;
                }

                if (Enum.TryParse(typeof(RuleType), row[(int)ColumnIndexes.RuleType], out object? ruleTypeObject))
                {
                    rule.RuleType = (RuleType?)ruleTypeObject;
                }


                result.Add(rule);
            }

            return result;

        }

        private string? GetValueOrNull(List<string> row, ColumnIndexes index)
        {
            var value = row[(int)index];
            if (string.IsNullOrWhiteSpace(value))
            {
                return null;
            }

            return value.Trim();
        }

        private bool? MapIsSeasonalTime(string? rawValue)
        {
            switch (rawValue)
            {
                case null:
                    return null;
                case "TRUE":
                    return true;
                case "FALSE":
                    return false;
                default:
                    return null;
            }
        }

        private FeastOrSeasonType MapFeastOrSeasonType(string? rawValue) 
        {
            if (string.IsNullOrEmpty(rawValue))
            { 
                return FeastOrSeasonType.None;
            }

            try
            {
                var values = rawValue.Split(';');

                var returnValue = FeastOrSeasonType.None;
                foreach (var value in values)
                {
                    var valueAsEnum = (FeastOrSeasonType)Enum.Parse(typeof(FeastOrSeasonType), value);
                    returnValue |= valueAsEnum;
                }

                return returnValue;
            }
            catch (Exception e)
            {
                throw new ArgumentException($"Could not parse feast or season type '{rawValue}' - " + e.Message );
            }

        }


        private DayOfWeek? MapWeekday(string? weekdayString)
        {

            switch (weekdayString)
            {
                case "":
                    return null;

                case "M":
                    return DayOfWeek.Monday;

                case "T":
                    return DayOfWeek.Tuesday;

                case "W":
                    return DayOfWeek.Wednesday;

                case "Th":
                    return DayOfWeek.Thursday;
                case "F":
                    return DayOfWeek.Friday;

                case "S":
                    return DayOfWeek.Saturday;

                case "Su":
                    return DayOfWeek.Sunday;

                default:
                    return null;

            }

        }

        private RclYear MapRclYear(string? rclYear)
        {
            switch (rclYear) 
            {
                case "A":
                    return RclYear.A;
                case "B":
                    return RclYear.B;
                case "C":
                    return RclYear.C;
                default:
                    return RclYear.All;
            }
        }

    }
}
