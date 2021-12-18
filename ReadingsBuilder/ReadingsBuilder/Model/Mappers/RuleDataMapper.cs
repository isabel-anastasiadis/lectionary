
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

        public List<RuleData> MapRowsToRuleData(List<List<string>> rows){

            var result = new List<RuleData>();

            foreach (var row in rows) {

                var ruleData = new RuleData()
                {
                    HandlingClassName = row[(int)ColumnIndexes.RuleClassName],
                    DayName = row[(int)ColumnIndexes.DayName],
                    Weekday = MapWeekday(row[(int)ColumnIndexes.ByDayOfWeekWeekday]),
                    RotatingOldTestament1 = row[(int)ColumnIndexes.RotatingOldTestament1],
                    RotatingOldTestament2a = row[(int)ColumnIndexes.RotatingOldTestament2a],
                    RotatingOldTestament2b = row[(int)ColumnIndexes.RotatingOldTestament2b],
                    RotatingNewTestament1 = row[(int)ColumnIndexes.RotatingNewTestament1],
                    RotatingNewTestament2 = row[(int)ColumnIndexes.RotatingNewTestament2],
                    MorningOldTestament = row[(int)ColumnIndexes.MorningOldTestament],
                    MorningNewTestament = row[(int)ColumnIndexes.MorningNewTestament],
                    EveningOldTestament = row[(int)ColumnIndexes.EveningOldTestament],
                    EveningNewTestament = row[(int)ColumnIndexes.EveningNewTestament],
                    MorningPsalmsMain = row[(int)ColumnIndexes.MorningPsalmMain],
                    EveningPsalmsMain = row[(int)ColumnIndexes.EveningPsalmMain],
                };

                if (int.TryParse(row[(int)ColumnIndexes.RowWithinClass], out int rowWithinClass)) {
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


        private Weekday? MapWeekday(string weekdayString) {

            switch (weekdayString)
            {
                case "":
                    return null;

                case "M":
                    return Weekday.Monday;

                case "T": 
                    return Weekday.Tuesday;

                case "W":
                    return Weekday.Wednesday;

                case "Th":
                    return Weekday.Thursday;
                case "F": 
                    return Weekday.Friday;

                case "S":
                    return Weekday.Saturday;

                case "Su":
                    return Weekday.Sunday;

                default:
                    return Weekday.Unknown;
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
