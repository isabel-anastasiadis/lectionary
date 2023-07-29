
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
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
            if (workingResult.Input?.FifthSundayAfterEpiphany == null)
            {
                throw new ArgumentNullException("FifthSundayAfterEpiphany date wasn't set on the input");
            }

            if (workingResult.Input?.PalmSunday == null) 
            {
                throw new ArgumentNullException("PalmSunday date wasn't set on the input");
            }

            var startingDate = workingResult.Input.FifthSundayAfterEpiphany.Value;
            var endingDate = workingResult.Input.PalmSunday.Value;

            var firstRuleSetRow = RowOfRuleSetToStartFrom(startingDate, endingDate);

            var ruleDataToStartWith = ApplicableRules.First(rule => rule.RowNumberInRuleSet == firstRuleSetRow);

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, startingDate, ruleDataToStartWith, null);
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


    }
}
