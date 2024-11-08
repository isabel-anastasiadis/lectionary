﻿using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.RuleExceptions;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class ByDayOfMonthRuleSetApplier : IByDayOfMonthRuleSetApplier
    {
        private readonly IRuleApplier ruleApplier;
        private readonly ITransferCalculator transferCalculator;

        public ByDayOfMonthRuleSetApplier(IRuleApplier ruleApplier, ITransferCalculator transferCalculator)
        {
            this.ruleApplier = ruleApplier;
            this.transferCalculator = transferCalculator;
        }

        public PipelineWorkingResult ApplyRulesByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, List<Rule> applicableRules, IRuleException? ruleException = null)
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

                ApplyRuleByDayOfMonth(workingResult, liturgicalYear, rule, ruleException);
            }

            return workingResult;
        }

        public void ApplyRuleByDayOfMonth(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear, Rule rule, IRuleException? ruleException = null)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (rule == null)
            {
                throw new ArgumentNullException(nameof(rule));
            }

            var dayValue = rule.Day;
            var monthValue = rule.Month;
            int? yearValue = rule.Year;

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

            // Max of 2 dates, but usually just one
            foreach (var date in possibleDates) {
                if (ruleException != null && ruleException.ShouldSkip(date))
                {
                    continue;
                }

                if (!workingResult.Result.ContainsKey(date)) {
                    continue;
                }

                var transferDate = transferCalculator.GetTransferredDate(rule.FeastOrSeasonFlags, workingResult, date);

                var dateToApplyTo = transferDate ?? date;
                var day = workingResult.Result[dateToApplyTo].OptionOne;

                if (day != null)
                {
                    ruleApplier.ApplyRuleToDay(rule, day, liturgicalYear);
                }
            }

        }
    }
}
