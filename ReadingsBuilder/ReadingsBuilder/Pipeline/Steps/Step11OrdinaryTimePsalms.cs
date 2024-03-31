
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step11OrdinaryTimePsalms : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step11OrdinaryTimePsalms(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 11;

        protected override string RuleSetName => "OrdinaryTimePsalms";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear)
        {
            workingResult = ApplyForTimeBeforeEaster(workingResult, liturgicalYear);
            workingResult = ApplyForTimeAfterEaster(workingResult, liturgicalYear);
            return workingResult;
        }

        private PipelineWorkingResult ApplyForTimeBeforeEaster(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear) {
            if (workingResult.Input?.FifthSundayAfterEpiphany == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.FifthSundayAfterEpiphany));
            }

            if (workingResult.Input?.AshWednesday == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.AshWednesday));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // The day after the presentation of Jesus on 2nd Feb is first day of ordinary time Psalms (as per weekday lectionary p.28)
            // The cycle start is defined by week 4 starting on the Mon between 2-8th of Jan, even though the first day it applies is the 3rd of Feb (p32)
            // This usually works out to mean we're starting after the presentation on Week 1, but not always!
            var firstDay = workingResult.Result.Keys.FirstOrDefault(date => date.Month == 2 && date.Day == 3);
            var lastDay = workingResult.Input.AshWednesday.Value.Clone().AddDays(-1);

            var mondayThatIsWeek4 = workingResult.Result.Keys.FirstOrDefault(date => date.Month == 1 && date.Day >= 2 && date.DayOfWeek == DayOfWeek.Monday);
            var mondayOfWeekOfTheFirstDay = workingResult.Result
                                                         .Keys
                                                         .LastOrDefault(date =>
                                                            date.DayNumber <= firstDay.DayNumber
                                                            && date.DayOfWeek == DayOfWeek.Monday
                                                         );

            var weeksBetweenWeek4AndStartingDayWeek = (mondayOfWeekOfTheFirstDay.DayNumber - mondayThatIsWeek4.DayNumber) / 7;
            
            var zeroBasedStartingCycleWeek = (weeksBetweenWeek4AndStartingDayWeek + 3) % 7; // week 4 is 3 in zero based system, and mod needs 0 based anyway
            var zeroBasedStartingDay = (int)firstDay.DayOfWeek;  // for this enum, Sunday = 0, and that is also where we start our week from
            var indexOfRuleToStartWith = (zeroBasedStartingCycleWeek) * 7 + zeroBasedStartingDay;

            var RulesToStartWith = applicableRules[indexOfRuleToStartWith];

            ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, firstDay, RulesToStartWith, lastDay, rulesLoopAround: true);

            return workingResult;
        }

        private PipelineWorkingResult ApplyForTimeAfterEaster(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear)
        {
            if (workingResult.Input?.Pentecost == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.Pentecost));
            }

            if (workingResult.Input?.FourthSundayBeforeAdvent == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.FourthSundayBeforeAdvent));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // The day after pentecost is first day of ordinary time Psalms (as per weekday lectionary p.28)
            // The cycle start is defined by week 1 starting on the monday after 2nd Sunday of easter (see p.32)
            // But because there are always exactly the same number of weeks between pentecost and 2nd sunday of easter
            // we don't need to calculate it, we can just always start on Mon of week 7 (ie. the rule with index 43).

            var firstMondayDate = workingResult.Input.Pentecost.Value.AddDays(1);
            var lastSaturdayDate = workingResult.Input.FourthSundayBeforeAdvent.Value.AddDays(-1);
            var ruleIndex = 43; // zero based week(ie. 6) * 7 + dayIndex(ie. 1) = 43
            var RulesToStartWith = applicableRules[ruleIndex];

            ruleSetApplier.ApplyRulesByDayOfWeek(workingResult,
                liturgicalYear,
                applicableRules, 
                firstMondayDate, 
                RulesToStartWith, 
                lastSaturdayDate, 
                rulesLoopAround: true
            );

            return workingResult;
        }
    }
}
