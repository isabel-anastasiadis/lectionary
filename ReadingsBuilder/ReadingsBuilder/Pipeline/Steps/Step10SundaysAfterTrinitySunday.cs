
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step10SundaysAfterTrinitySunday : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step10SundaysAfterTrinitySunday(IRuleApplier ruleApplier, 
            IRulesFactory rulesFactory,
            IByDayOfWeekRuleSetApplier ruleSetApplier) 
            : base(ruleApplier, rulesFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 10;

        protected override string RuleSetName => "SundaysAfterTrinitySunday";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.Pentecost == null)
            {
                throw new ArgumentNullException("workingResult.Input.Pentecost");
            }


            if (workingResult.Input?.FirstSundayOfAdventTheFollowingYear == null)
            {
                throw new ArgumentNullException("workingResult.Input.FirstSundayOfAdventTheFollowingYear");
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);
            // this ruleset needs to work backwards to fill from the end of the year back up to the sunday after trinity sunday
            // so we need to work out how many days there are in that range to find the starting rule in the ruleset

            // how many applicable days are there (ie. days between between Sunday after Trinity Sunday and the last Sunday of the lectionary year)?
            var sundayAfterTrinityDayNumber = workingResult.Input.Pentecost.Value.DayNumber + 14;
            var lastSundayDayNumber = workingResult.Input.FirstSundayOfAdventTheFollowingYear.Value.DayNumber - 7;
            var applicableNumberOfDays = lastSundayDayNumber - sundayAfterTrinityDayNumber + 1; // plus one because we want to include both

            var startingRule = applicableRules[applicableRules.Count - applicableNumberOfDays];
            var firstDay = workingResult.Result.Keys.FirstOrDefault(date => date.DayNumber == sundayAfterTrinityDayNumber);
            var lastDay = workingResult.Result.Keys.FirstOrDefault(date => date.DayNumber == lastSundayDayNumber);

            if (lastDay.DayNumber == 0) // means the expected last day wasn't in the result set of keys
            {
                lastDay = workingResult.Input.EndDate;
            }

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, firstDay, startingRule, lastDay);
        }
    }
}
