
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
            RuleData? ruleDataToStartWith)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (dateOfFirstDayRuleAppliesTo == default)
            {
                return workingResult;
            }

            if (ruleDataToStartWith == null)
            {
                return workingResult;
            }

            var indexOfFirstRuleToStartWith = applicableRules.IndexOf(ruleDataToStartWith);
            var currentDate = dateOfFirstDayRuleAppliesTo;

            for (int i = indexOfFirstRuleToStartWith; i < Math.Min(applicableRules.Count, indexOfFirstRuleToStartWith + workingResult.Result.Count); i++)
            {
                var ruleData = applicableRules[i];
                var day = workingResult.Result[currentDate].OptionOne;

                if (day == null)
                {
                    throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                }

                _ruleApplier.ApplyRuleToDay(ruleData, day);

                currentDate = currentDate.AddDays(1);

            }

            return workingResult;

        }
    }
}
