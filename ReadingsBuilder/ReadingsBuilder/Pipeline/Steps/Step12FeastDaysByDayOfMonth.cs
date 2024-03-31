using ReadingsBuilder.Model;
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step12FeastDaysByDayOfMonth : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step12FeastDaysByDayOfMonth(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 12;

        protected override string RuleSetName => "FeastDaysByDayOfMonth";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // the rules alternate between eveningbefore and the festival
            for (int i = 0; i < applicableRules.Count; i += 2)
            { 
                var eveningBeforeRule = applicableRules[i];
                var festivalRule = applicableRules[(i + 1)];

                var dateKey = workingResult.Result.Keys.Where(key => key.Month == festivalRule.Month && key.Day == festivalRule.Day).FirstOrDefault();
                if (dateKey == default)
                {
                    continue;
                }

                var festivalDay = workingResult.Result[dateKey].OptionOne;
                if (festivalDay == null)
                {
                    continue;
                }

                if ((festivalRule.FeastOrSeasonFlags & FeastOrSeasonType.Festival) == FeastOrSeasonType.Festival)
                {
                    if (!festivalDay.CanHaveFestival)
                    {
                        continue;
                    }
                }

                // TODO - sometimes things falling in HolyWeek get shifted later
                // Not doing this yet
                // eg. if St George and St Mark both fall in Holy Week, then St George will be shifted to the
                // first available day (prob. Monday), and St Mark the day after that.
                DateOnly? eveningBeforeDateOverride = null;
                DateOnly? festivalDayDateOverride = null;

                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, 
                    liturgicalYear, 
                    eveningBeforeRule,
                    null, 
                    eveningBeforeDateOverride);

                // Sometimes the readings apply in the Morning but not in the evening.
                // 11/06/2022 is an example where morning readings are from Feast of St barnabas,
                // but evening readings are the 1st EP of of Trinity Sunday (which has already
                // been applied by an eariler rule)
                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, 
                    liturgicalYear, 
                    festivalRule, 
                    null, 
                    festivalDayDateOverride);
            }

            return workingResult;
        }
    }
}
