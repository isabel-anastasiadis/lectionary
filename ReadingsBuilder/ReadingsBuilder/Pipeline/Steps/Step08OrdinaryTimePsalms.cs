
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step08OrdinaryTimePsalms : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step08OrdinaryTimePsalms(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 8;

        protected override string RuleSetName => "OrdinaryTimePsalms.cs";

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

            // Presentation of Jesus on 2nd Feb seems to be the first day of ordinary time Psalms
            // Presentation of Jesus has its own readings, but if not celebrated, then the psalm readings are ordinary time ones.
            var presentationOfJesus = workingResult.Result.Keys.FirstOrDefault(date => date.Month == 2 && date.Day == 2);
            var shroveTuesday = workingResult.Input.AshWednesday.Value.Clone().AddDays(-1);
            var RulesToStartWith = ApplicableRules.First(rule => rule.Weekday == presentationOfJesus.DayOfWeek);

            ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, ApplicableRules, presentationOfJesus, RulesToStartWith, shroveTuesday);

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

            if (workingResult.Input?.OrdinaryTimePsalmsSecondChunkStartingIndex == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.OrdinaryTimePsalmsSecondChunkStartingIndex));
            }

            var firstMondayDate = workingResult.Input.Pentecost.Value.AddDays(1);
            var lastSaturdayDate = workingResult.Input.FourthSundayBeforeAdvent.Value.AddDays(-1);
            var ruleIndex = workingResult
                .Input
                .OrdinaryTimePsalmsSecondChunkStartingIndex
                .Value;
            var RulesToStartWith = ApplicableRules[ruleIndex];

            ruleSetApplier.ApplyRulesByDayOfWeek(workingResult,
                liturgicalYear,
                ApplicableRules, 
                firstMondayDate, 
                RulesToStartWith, 
                lastSaturdayDate, 
                rulesLoopAround: true
            );

            return workingResult;
        }
    }
}
