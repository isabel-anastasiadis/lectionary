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
        FeastDaySeasonType,
        EveningName,
        DayName,
        IsSeasonalTime,
        ByDayOfWeekWeekday,
        ByDayOfMonthYear,
        ByDayOfMonthMonth,
        ByDayOfMonthDay,
        RotatingOldTestament1,
        RotatingOldTestament2a,
        RotatingOldTestament2b,
        RotatingNewTestament1,
        RotatingNewTestament2,
        MorningOldTestament,
        MorningNewTestament,
        EveningOldTestament,
        EveningNewTestament,
        MorningPsalmMain,
        MorningPsalmOptional,
        MorningPsalmOmittedIfCanticle,
        EveningPsalmMain,
        EveningPsalmOptional,
        EveningPsalmOmittedIfCanticle
    }

    public class RulesMapper : IRulesMapper
    {

        public List<Model.Rule> MapRowsToRules(List<List<string>> rows)
        {

            var result = new List<Model.Rule>();

            foreach (var row in rows)
            {

                var Rules = new Model.Rule()
                {
                    HandlingClassName = GetValueOrNull(row, ColumnIndexes.RuleClassName),
                    DayName = GetValueOrNull(row, ColumnIndexes.DayName),
                    EveningName = GetValueOrNull(row, ColumnIndexes.EveningName),
                    Weekday = MapWeekday(GetValueOrNull(row, ColumnIndexes.ByDayOfWeekWeekday)),
                    IsSeasonalTime = MapIsSeasonalTime(GetValueOrNull(row, ColumnIndexes.IsSeasonalTime)),
                    FeastOrSeasonFlags = MapFeastOrSeasonType(GetValueOrNull(row, ColumnIndexes.FeastDaySeasonType)),
                    MorningOldTestament = GetValueOrNull(row, ColumnIndexes.MorningOldTestament),
                    MorningNewTestament = GetValueOrNull(row, ColumnIndexes.MorningNewTestament),
                    EveningOldTestament = GetValueOrNull(row, ColumnIndexes.EveningOldTestament),
                    EveningNewTestament = GetValueOrNull(row, ColumnIndexes.EveningNewTestament),
                    MorningPsalmsMain = GetValueOrNull(row, ColumnIndexes.MorningPsalmMain),
                    EveningPsalmsMain = GetValueOrNull(row, ColumnIndexes.EveningPsalmMain)
                };

                Rules.RotatingReadings[RotatingReadingType.OldTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament1);
                Rules.RotatingReadings[RotatingReadingType.OldTestament2a] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2a);
                Rules.RotatingReadings[RotatingReadingType.OldTestament2b] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2b);
                Rules.RotatingReadings[RotatingReadingType.NewTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament1);
                Rules.RotatingReadings[RotatingReadingType.NewTestament2] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament2);

                if (int.TryParse(row[(int)ColumnIndexes.RowWithinClass], out int rowWithinClass))
                {
                    Rules.RowNumberInRuleSet = rowWithinClass;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthYear], out int year))
                {
                    Rules.Year = year;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthMonth], out int month))
                {
                    Rules.Month = month;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthDay], out int day))
                {
                    Rules.Day = day;
                }

                if (Enum.TryParse(typeof(RuleType), row[(int)ColumnIndexes.RuleType], out object? ruleTypeObject))
                {
                    Rules.RuleType = (RuleType?)ruleTypeObject;
                }


                result.Add(Rules);
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

    }
}
