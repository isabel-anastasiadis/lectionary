
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step04Lent : BaseStep, IStep
    {
        public Step04Lent(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 4;

        protected override string RuleSetName => "Lent.cs";

        private const int WeeksInLent = 5;
        private const int WeeksOfDataForPreLentTime = 5;
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            if (workingResult.Input?.PalmSunday == null) 
            {
                throw new ArgumentNullException("PalmSunday date wasn't set on the input");
            }

            var startingDate = FifthSundayAfterEpiphany(workingResult);
            var endingDate = workingResult.Input.PalmSunday;

            if (startingDate == null) 
            {
                return workingResult;
            }

            var firstRuleSetRow = RowOfRuleSetToStartFrom(startingDate.Value, endingDate);

            var ruleDataToStartWith = ApplicableRules.First(rule => rule.RowNumberInRuleSet == firstRuleSetRow);

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, startingDate.Value, ruleDataToStartWith);
        }

        private int RowOfRuleSetToStartFrom(DateOnly startingDate, DateOnly endingDate) {
            // there are up to 5 weeks before lent, but we might skip some of the first ones if there isn't enough space
            var startingDateDatetime = new DateTime(startingDate.Year, startingDate.Month, startingDate.Day);
            var endingDateDatetime = new DateTime(endingDate.Year, endingDate.Month, endingDate.Day);
            var weeksBetweenStartAndEnd = endingDateDatetime.Subtract(startingDateDatetime).Days / 7;  // always Sun to Sun, so no worries with non-whole numbers

            var weeksLeadingToLent = weeksBetweenStartAndEnd - WeeksInLent;
            var weeksToSkip = WeeksOfDataForPreLentTime - weeksLeadingToLent;
            var rowOfDataToStartWith = weeksToSkip * 7;

            return rowOfDataToStartWith + 1;
        }

        private DateOnly? FifthSundayAfterEpiphany(PipelineWorkingResult workingResult) {
            // work out when to start - 5th Sunday after the Epiphany
            var dayBeforeStartDay = workingResult.Result.Values
                .Where(dayResult => IsFourthSaturdayAfterEpiphany(dayResult.OptionOne))
                .Select(dayOption => dayOption?.OptionOne)
                .FirstOrDefault();

            if (dayBeforeStartDay == null)
            {
                return null;
            }

            var dayToStart = new DateOnly
                (
                    dayBeforeStartDay.Date.Year,
                    dayBeforeStartDay.Date.Month,
                    dayBeforeStartDay.Date.Day
                )
                .AddDays(1);

            return dayToStart;
        }

        private bool IsFourthSaturdayAfterEpiphany(Day? day) 
        {
            if (day == null || day.DayDescription == null) {
                return false;
            }

            return day.DayDescription.Contains("4th Sunday") 
                && day.DayDescription.Contains("after") 
                && day.DayDescription.Contains("Epiphany") 
                && day.Date.DayOfWeek == DayOfWeek.Saturday;
        }
    }
}
