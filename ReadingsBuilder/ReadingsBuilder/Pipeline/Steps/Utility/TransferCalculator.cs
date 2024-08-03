﻿

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
            return ruleFlags.Matches(FeastOrSeasonType.EveningBeforeMask) || ruleFlags.Matches(FeastOrSeasonType.FeastOrFestivalMask);
        }

        /// <summary>
        /// Returns a new DateOnly for the next available transfer date, or null if it does not need transferring.
        /// </summary>
        public DateOnly? GetNextAvailableDate(FeastOrSeasonType ruleFlags, PipelineWorkingResult workingResult, DateOnly plannedDate) 
        {
            var allKeys = workingResult.Result.Keys.ToList();

            var plannedFestivalDate = ruleFlags.Matches(FeastOrSeasonType.EveningBeforeMask) ? plannedDate.AddDays(1) : plannedDate;

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

            DateOnly? actualFestivalDate = null;
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

                    if (!IsHolyOrEasterWeekOrEastertideSunday(nextDay) && !nextDay.FeastOrSeasonType.Matches(FeastOrSeasonType.FeastOrFestivalMask))
                    {
                        actualFestivalDate = nextDate;
                        break;
                    }
                }
            }

            if(actualFestivalDate == null)
                return null;

            return ruleFlags.Matches(FeastOrSeasonType.EveningBeforeMask) ? actualFestivalDate.Value.AddDays(-1) : actualFestivalDate;
        }

        private bool IsHolyOrEasterWeekOrEastertideSunday(Day day)
        {
            var isHolyOrEasterWeek = day.FeastOrSeasonType.Matches(FeastOrSeasonType.HolyOrEasterWeekMask);
            var isEastertideSunday = day.FeastOrSeasonType.Matches(FeastOrSeasonType.Eastertide) && day.Date.DayOfWeek == DayOfWeek.Sunday;
            return  isHolyOrEasterWeek || isEastertideSunday;
        }
    }
}