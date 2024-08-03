

using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class TransferCalculator : ITransferCalculator
    {
        /// <summary>
        /// Returns a new DateOnly for the next available transfer date, or null if it does not need transferring.
        /// </summary>
        public DateOnly? GetTransferredDate(FeastOrSeasonType ruleFlags, PipelineWorkingResult workingResult, DateOnly plannedDate) 
        {
            if (!RuleCanTransfer(ruleFlags))
            {
                return null;
            }

            var allKeys = workingResult.Result.Keys.ToList();

            var plannedFestivalDate = ruleFlags.Matches(FeastOrSeasonType.EveningBeforeMask) ? plannedDate.AddDays(1) : plannedDate;

            var indexOfPlannedFestivalDate = allKeys.IndexOf(plannedFestivalDate);
            var plannedFestivalDay = workingResult.Result[plannedFestivalDate].OptionOne;

            if (plannedFestivalDay == null)
            {
                return null;
            }

            // St Joseph, St George, or St Mark (ie. the only festivals that can possibly clash with Easter), falling between
            // Palm Sunday and the Second Sunday of Easter inclusive
            // must be transferred.
            //
            // A Festival falling on a Sunday in Advent, Lent or Eastertide
            // must be transferred.
            //
            // See https://www.churchofengland.org/prayer-and-worship/worship-texts-and-resources/common-worship/churchs-year/rules
            DateOnly? actualFestivalDate = null;
            if (IsHolyOrEasterWeekOrAdventLentOrEastertideSunday(plannedFestivalDay))
            {
                for (var i = indexOfPlannedFestivalDate; i < workingResult.Result.Count; i++)
                {
                    var nextDate = allKeys[i];
                    var nextDay = workingResult.Result[nextDate].OptionOne;

                    if (nextDay == null)
                    {
                        continue;
                    }

                    if (!IsHolyOrEasterWeekOrAdventLentOrEastertideSunday(nextDay) && !nextDay.FeastOrSeasonType.Matches(FeastOrSeasonType.FeastOrFestivalMask))
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

        private bool RuleCanTransfer(FeastOrSeasonType ruleFlags)
        {
            return ruleFlags.Matches(FeastOrSeasonType.EveningBeforeMask) || ruleFlags.Matches(FeastOrSeasonType.FeastOrFestivalMask);
        }

        private bool IsHolyOrEasterWeekOrAdventLentOrEastertideSunday(Day day)
        {
            var isHolyOrEasterWeek = day.FeastOrSeasonType.Matches(FeastOrSeasonType.HolyOrEasterWeekMask);
            var isAdventLentOrEastertide = day.FeastOrSeasonType.Matches(FeastOrSeasonType.AdventLentOrEastertideMask);
            var isSunday = day.Date.DayOfWeek == DayOfWeek.Sunday;
            return  isHolyOrEasterWeek || (isAdventLentOrEastertide && isSunday);
        }
    }
}
