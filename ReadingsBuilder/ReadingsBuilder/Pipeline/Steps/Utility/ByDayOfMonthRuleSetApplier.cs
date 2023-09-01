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

        public PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, List<Rule> applicableRules)
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

        public void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, Rule rule, DateOnly? dateOverride = null)
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

            if (!possibleDates.Any())
            {
                return;
            }

            if (possibleDates.Count() > 2)
            {
                // We sometimes get the same date falling twice in a lectionary year
                // A good example is 29th Nov in the 2022-2023 lectionary, which started 27th Nov 2022 - 1 Dec 2023
                // In this case we apply to both
                // But if there are more than two, then there's a problem.
                throw new ArgumentException($"There should only be up to two matching days per rule (Steps are only assumed to run on a year's worth of data, and previous steps might not have processed the necessary days)");
            }

            foreach (var date in possibleDates) {
                var day = workingResult.Result[date].OptionOne;
                if (day != null)
                {
                    ruleApplier.ApplyRuleToDay(rule, day);
                }
            }

        }
    }
}
