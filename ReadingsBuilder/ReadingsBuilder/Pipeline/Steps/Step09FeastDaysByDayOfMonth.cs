using ReadingsBuilder.Model;
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Pipeline.DTOs;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step09FeastDaysByDayOfMonth : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step09FeastDaysByDayOfMonth(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 9;

        protected override string RuleSetName => "FeastDaysByDayOfMonth.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            // the rules alternate between eveningbefore and the festival
            for (int i = 0; i < ApplicableRules.Count; i += 2)
            { 
                var eveningBeforeRule = ApplicableRules[i];
                var festivalRule = ApplicableRules[(i + 1)];

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
                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, eveningBeforeRule, newEveningBeforeDate);
                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, festivalRule, newFestivalDate);
            }

            return workingResult;
        }

        private DateOnly FindNextAvailableDay(DateOnly originalDate, PipelineWorkingResult workingResult)
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            return workingResult.Result
                .Where(keyValue => keyValue.Key > originalDate)
                .Where(keyValue => keyValue.Value.OptionOne != null)
                .Select(keyValue => keyValue.Value.OptionOne)
                .First(day => day?.CanHaveFestival == true)
#pragma warning restore CS8602 // Dereference of a possibly null reference.
                .Date;
        }

    }
}
