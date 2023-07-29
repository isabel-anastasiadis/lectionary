using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class ByDayOfMonthRuleSetApplier : IByDayOfMonthRuleSetApplier
    {
        private readonly IRuleApplier ruleApplier;

        public ByDayOfMonthRuleSetApplier(IRuleApplier ruleApplier)
        {
            this.ruleApplier = ruleApplier;
        }

        public PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<RuleData> applicableRules)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (applicableRules == null)
            {
                throw new ArgumentNullException(nameof(applicableRules));
            }

            foreach (var rule in applicableRules)
            {

                ApplyRuleByDayOfMonth(workingResult, rule);
            }

            return workingResult;
        }

        public void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, RuleData rule, DateOnly? dateOverride = null)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (rule == null)
            {
                throw new ArgumentNullException(nameof(rule));
            }

            var dayValue = dateOverride != null ? dateOverride.Value.Day : rule.Day;
            var monthValue = dateOverride != null ? dateOverride.Value.Month : rule.Month;
            int? yearValue = dateOverride != null ? dateOverride.Value.Year : rule.Year;

            var possibleDates = workingResult.Result.Keys.Where(date => (!yearValue.HasValue || date.Year == yearValue) && date.Month == monthValue && date.Day == dayValue).ToList();
            if (possibleDates.Count() > 1)
            {
                throw new ArgumentException($"There should only be one matching day per rule (Steps are only assumed to run on a year's worth of data, and previous steps might not have processed the necessary days)");
            }

            if (!possibleDates.Any())
            {
                return;
            }

            var day = workingResult.Result[possibleDates.First()].OptionOne;
            if (day != null)
            {
                ruleApplier.ApplyRuleToDay(rule, day);
            }
        }
    }
}
