using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    internal class Step06ThreeSundaysBetweenEpiphanyAndLent : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step06ThreeSundaysBetweenEpiphanyAndLent(
            IRuleApplier ruleApplier, 
            IRulesFactory rulesFactory, 
            IByDayOfWeekRuleSetApplier ruleSetApplier) 
            : base(ruleApplier, rulesFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 6;

        protected override string RuleSetName => "ThreeSundaysBetweenEpiphanyAndLent";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, 
            LiturgicalYear liturgicalYear)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.AshWednesday == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.AshWednesday));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // starts on the 5th Sunday after epiphany, and goes until the sunday before 2nd Sunday before lent
            var sundayAfterEpiphany = workingResult.Result.Keys.FirstOrDefault(date => date.Month == 1 && date.Day >= 6 && date.DayOfWeek == DayOfWeek.Sunday);
            var firstDay = workingResult.Result.Keys.FirstOrDefault(date => date.DayNumber == sundayAfterEpiphany.DayNumber + 4 * 7);
            var lastDay = workingResult.Result
                                       .Keys
                                       .FirstOrDefault(date => 
                                            date.DayNumber == workingResult.Input.AshWednesday.Value.DayNumber - 17
                                        ); // 17 days before Ash Wed

            // eg. when the 5th Sunday after epiphany IS the 2nd Sunday before lent
            if (lastDay.DayNumber < firstDay.DayNumber)
            {
                return workingResult;
            }

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, firstDay, null, lastDay);
        }
    }
}
