
using ReadingsBuilder.Model.Data;

namespace ReadingsBuilder.Model.Mappers
{

    public enum ColumnIndexes
    {
        RuleClassOrder,
        RuleClassName, 
        RuleType,
        RowWithinClass,
        DayName,
        IsSeasonalTime,
        ByDayOfWeekWeekday,
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
        // TODO:
        MorningPsalmMain,
        MorningPsalmOptional,
        MorningPsalmOmittedIfCanticle,
        EveningPsalmMain,
        EveningPsalmOptional,
        EveningPsalmOmittedIfCanticle
    }

    public class RuleDataMapper
    {

        public List<RuleData> MapRowsToRuleData(List<List<string>> rows)
        {

            var result = new List<RuleData>();

            foreach (var row in rows) 
            {

                var ruleData = new RuleData()
                {
                    HandlingClassName = GetValueOrNull(row, ColumnIndexes.RuleClassName),
                    DayName = GetValueOrNull(row, ColumnIndexes.DayName),
                    Weekday = MapWeekday(GetValueOrNull(row, ColumnIndexes.ByDayOfWeekWeekday)),
                    MorningOldTestament = GetValueOrNull(row, ColumnIndexes.MorningOldTestament),
                    MorningNewTestament = GetValueOrNull(row, ColumnIndexes.MorningNewTestament),
                    EveningOldTestament = GetValueOrNull(row, ColumnIndexes.EveningOldTestament),
                    EveningNewTestament = GetValueOrNull(row, ColumnIndexes.EveningNewTestament),
                    MorningPsalmsMain = GetValueOrNull(row, ColumnIndexes.MorningPsalmMain),
                    EveningPsalmsMain = GetValueOrNull(row, ColumnIndexes.EveningPsalmMain)
                };

                ruleData.RotatingReadings[RotatingReadingType.OldTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament1);
                ruleData.RotatingReadings[RotatingReadingType.OldTestament2a] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2a);
                ruleData.RotatingReadings[RotatingReadingType.OldTestament2b] = GetValueOrNull(row, ColumnIndexes.RotatingOldTestament2b);
                ruleData.RotatingReadings[RotatingReadingType.NewTestament1] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament1);
                ruleData.RotatingReadings[RotatingReadingType.NewTestament2] = GetValueOrNull(row, ColumnIndexes.RotatingNewTestament2);

                if (int.TryParse(row[(int)ColumnIndexes.RowWithinClass], out int rowWithinClass)) 
                {
                    ruleData.RowNumberInRuleSet = rowWithinClass;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthMonth], out int month))
                {
                    ruleData.Month = month;
                }

                if (int.TryParse(row[(int)ColumnIndexes.ByDayOfMonthDay], out int day))
                {
                    ruleData.Day = day;
                }

                if (Enum.TryParse(typeof(RuleType), row[(int)ColumnIndexes.RuleType], out object ruleTypeObject))
                {
                    ruleData.RuleType = (RuleType?)ruleTypeObject;
                }


                result.Add(ruleData);
            }

            return result;

        }

        private string? GetValueOrNull(List<string> row, ColumnIndexes index) 
        {
            var value = row[(int)index];
            if (string.IsNullOrWhiteSpace(value)) {
                return null;
            }

            return value;
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

        private RuleType MapRuleType(string ruleTypeString) {
            switch (ruleTypeString)
            {
                case "ByDayOfWeek":
                    return RuleType.ByDayOfWeek;

                case "ByDayOfMonth": 
                    return RuleType.ByDayOfMonth;

                default:
                    return RuleType.Unknown;
            }

        }
    }
}
