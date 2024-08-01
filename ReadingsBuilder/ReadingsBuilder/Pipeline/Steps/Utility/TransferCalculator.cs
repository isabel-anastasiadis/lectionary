

using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class TransferCalculator : ITransferCalculator
    {
        public enum Priority { 
            None = 0,
            Festival = 1,
            Principal = 2
        }

        public TransferCalculator() { 
        }

        public bool RuleApplies(Rule rule) 
        {
            return (rule.FeastOrSeasonFlags & FeastOrSeasonType.Festival) != 0
                || (rule.FeastOrSeasonFlags & FeastOrSeasonType.PrincipalFeast) != 0
                || (rule.FeastOrSeasonFlags & FeastOrSeasonType.PrincipalHolyDay) != 0
                || (rule.FeastOrSeasonFlags & FeastOrSeasonType.EveningBeforeFestival) != 0
                || (rule.FeastOrSeasonFlags & FeastOrSeasonType.EveningBeforePrincipalFeast) != 0
                || (rule.FeastOrSeasonFlags & FeastOrSeasonType.EveningBeforePrincipalHolyDay) != 0;
        }

        /// <summary>
        /// Returns a new DateOnly for the next available transfer date, or null if it does not need transferring.
        /// </summary>
        public DateOnly? GetNextAvailableDate(PipelineWorkingResult workingResult, DateOnly plannedDate) 
        {
            var allKeys = workingResult.Result.Keys.ToList<DateOnly>();
            var indexOfPlannedDate = allKeys.IndexOf(plannedDate);
            var plannedDay = workingResult.Result[plannedDate].OptionOne;

            if (plannedDay == null)
            {
                return null;
            }

            // St Joseph, St George, or St Mark, falling between
            // Palm Sunday and the Second Sunday of Easter inclusive
            // must be transferred
            //
            // A Festival falling on a Sunday in Advent, Lent or Eastertide
            // must be transferred
            //
            // See https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/common-worship/churchs-year/rules

            // TODO: Advent or Lent sundays!
            // TODO: evening before is the day before!!
            if (IsHolyOrEasterWeekOrEastertideSunday(plannedDay))
            {
                for (var i = indexOfPlannedDate; i < workingResult.Result.Count; i++)
                {
                    var nextDate = allKeys[i];
                    var nextDay = workingResult.Result[nextDate].OptionOne;

                    if (nextDay == null)
                    {
                        continue;
                    }

                    if (!IsHolyOrEasterWeekOrEastertideSunday(nextDay) && !AlreadyHasFeastOrFestival(nextDay))
                    {
                        return nextDate;
                    }
                }
            }

            return null;
        }

        private bool IsHolyOrEasterWeekOrEastertideSunday(Day day)
        {
            return day.HasFeastFlag(FeastOrSeasonType.HolyWeek) 
                || day.HasFeastFlag(FeastOrSeasonType.EasterWeek)
                || (day.HasFeastFlag(FeastOrSeasonType.Eastertide) && day.Date.DayOfWeek == DayOfWeek.Sunday);
        }

        private bool AlreadyHasFeastOrFestival(Day day)
        {
            return day.HasFeastFlag(FeastOrSeasonType.PrincipalFeast) 
                || day.HasFeastFlag(FeastOrSeasonType.PrincipalHolyDay) 
                || day.HasFeastFlag(FeastOrSeasonType.Festival);
        }

    }
}
