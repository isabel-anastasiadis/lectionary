
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps.Utility
{
    public class ByDayOfWeekRuleSetApplier : IByDayOfWeekRuleSetApplier
    {
        private readonly IRuleApplier _ruleApplier;

        public ByDayOfWeekRuleSetApplier(IRuleApplier ruleApplier)
        {
            _ruleApplier = ruleApplier;
        }

        public PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult,
            List<RuleData> applicableRules,
            DateOnly dateOfFirstDayRuleAppliesTo,
            RuleData? ruleDataToStartWith,
            DateOnly? dateOfLastDayRuleAppliesTo)
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

            var indexOfFirstRuleToStartWith = ruleDataToStartWith == null ? 0 : applicableRules.IndexOf(ruleDataToStartWith);
            var currentDate = dateOfFirstDayRuleAppliesTo;

            for (int i = indexOfFirstRuleToStartWith; i < applicableRules.Count; i++)
            {
                if (!workingResult.Result.ContainsKey(currentDate))
                {
                    break;
                }

                if (dateOfLastDayRuleAppliesTo != null && currentDate > dateOfLastDayRuleAppliesTo)
                {
                    break;
                }

                var ruleData = applicableRules[i];
                var day = workingResult.Result[currentDate]?.OptionOne;

                if (day == null)
                {
                    throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                }

                if (day.Date.DayOfWeek != ruleData.Weekday) {
                    throw new ArgumentException($"Expected {day.Date} to be a {ruleData.Weekday}, but it is {day.Date.DayOfWeek}.");
                }

                _ruleApplier.ApplyRuleToDay(ruleData, day);

                currentDate = currentDate.AddDays(1);
            }

            return workingResult;

        }
    }
}
