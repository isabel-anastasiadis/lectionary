

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

        public bool RuleApplies(FeastOrSeasonType ruleFlags) 
        {
            return IsEveningBefore(ruleFlags) || IsFeastOrFestival(ruleFlags);
        }

        /// <summary>
        /// Returns a new DateOnly for the next available transfer date, or null if it does not need transferring.
        /// </summary>
        public DateOnly? GetNextAvailableDate(FeastOrSeasonType ruleFlags, PipelineWorkingResult workingResult, DateOnly plannedDate) 
        {
            var allKeys = workingResult.Result.Keys.ToList();

            var plannedFestivalDate = IsEveningBefore(ruleFlags) ? plannedDate.AddDays(1) : plannedDate;

            var indexOfPlannedFestivalDate = allKeys.IndexOf(plannedFestivalDate);
            var plannedFestivalDay = workingResult.Result[plannedFestivalDate].OptionOne;

            if (plannedFestivalDay == null)
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

            DateOnly actualFestivalDate;
            if (IsHolyOrEasterWeekOrEastertideSunday(plannedFestivalDay))
            {
                for (var i = indexOfPlannedFestivalDate; i < workingResult.Result.Count; i++)
                {
                    var nextDate = allKeys[i];
                    var nextDay = workingResult.Result[nextDate].OptionOne;

                    if (nextDay == null)
                    {
                        continue;
                    }

                    if (!IsHolyOrEasterWeekOrEastertideSunday(nextDay) && !AlreadyHasFeastOrFestival(nextDay))
                    {
                        actualFestivalDate = nextDate;
                        break;
                    }
                }
            }

            if(plannedFestivalDay == null)
                return null;

            return IsEveningBefore(ruleFlags) ? actualFestivalDate.AddDays(-1) : actualFestivalDate;
        }

        private bool IsEveningBefore(FeastOrSeasonType flags)
        {
            return  (flags & FeastOrSeasonType.EveningBeforeFestival) != 0
                || (flags & FeastOrSeasonType.EveningBeforePrincipalFeast) != 0
                || (flags & FeastOrSeasonType.EveningBeforePrincipalHolyDay) != 0;
        }

        private bool IsFeastOrFestival(FeastOrSeasonType flags)
        {
            return (flags & FeastOrSeasonType.Festival) != 0
                || (flags & FeastOrSeasonType.PrincipalFeast) != 0
                || (flags & FeastOrSeasonType.PrincipalHolyDay) != 0;
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
