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

                DateOnly? newEveningBeforeDate = null;
                DateOnly? newFestivalDate = null;
                if ((festivalRule.FeastOrSeasonFlags & FeastOrSeasonType.Festival) == FeastOrSeasonType.Festival)
                {
                    if (!festivalDay.CanHaveFestival)
                    {
                        continue; // our NZ one seems to skip St George rather than shift..?
                    }
                }

                // temporary while I haven't quite built the data for all festivals yet.  Don't apply if there aren't readings set yet.
                if (!festivalRule.HasSetReadings && !festivalRule.HasSetEveningOverrides && !festivalRule.HasMorningPsalms && !festivalRule.HasEveningPsalms)
                {
                    continue;
                }

                // we need to apply them one by one (particularly for multiple festivals falling in Holy week that need moving)
                // eg. if St George and St Mark both fall in Holy Week, then St George will be shifted to the
                // first available day (prob. Monday), and St Mark the day after that.
                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, liturgicalYear, eveningBeforeRule, null, newEveningBeforeDate);
                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, liturgicalYear, festivalRule, null, newFestivalDate);
            }

            return workingResult;
        }

    }
}
