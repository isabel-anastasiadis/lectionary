using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class ByDayOfWeekRuleSetApplier : IByDayOfWeekRuleSetApplier
    {
        private readonly IRuleApplier _ruleApplier;

        public ByDayOfWeekRuleSetApplier(IRuleApplier ruleApplier)
        {
            _ruleApplier = ruleApplier;
        }

        public PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult,
            List<Rule> applicableRules,
            DateOnly dateOfFirstDayRuleAppliesTo,
            Rule? RulesToStartWith,
            DateOnly? dateOfLastDayRuleAppliesTo,
            bool rulesLoopAround = false)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (applicableRules == null)
            {
                throw new ArgumentNullException(nameof(applicableRules));
            }

            if (dateOfFirstDayRuleAppliesTo == default)
            {
                return workingResult;
            }

            var indexOfFirstRuleToStartWith = RulesToStartWith == null ? 0 : applicableRules.IndexOf(RulesToStartWith);
            var currentDate = dateOfFirstDayRuleAppliesTo;

            for (int i = indexOfFirstRuleToStartWith; i < int.MaxValue; i++)
            {
                if (!workingResult.Result.ContainsKey(currentDate))
                {
                    break;
                }

                if (dateOfLastDayRuleAppliesTo != null && currentDate > dateOfLastDayRuleAppliesTo)
                {
                    break;
                }

                var ruleIndex = rulesLoopAround ? i % applicableRules.Count : i;
                if (ruleIndex >= applicableRules.Count)
                {
                    break;
                }

                var rule = applicableRules[ruleIndex];
                var day = workingResult.Result[currentDate]?.OptionOne;

                if (day == null)
                {
                    throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                }

                if (day.Date.DayOfWeek != rule.Weekday) {
                    throw new ArgumentException($"Expected {day.Date} to be a {rule.Weekday}, but it is {day.Date.DayOfWeek}.");
                }

                _ruleApplier.ApplyRuleToDay(rule, day);

                currentDate = currentDate.AddDays(1);
            }

            return workingResult;

        }
    }
}
