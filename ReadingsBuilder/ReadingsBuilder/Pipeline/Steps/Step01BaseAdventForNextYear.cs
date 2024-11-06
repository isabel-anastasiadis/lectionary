

using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step01BaseAdventForNextYear : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;
        private readonly ILiturgicalYearFactory liturgicalYearFactory;

        public int Order => 2;

        protected override string RuleSetName => "BaseAdvent";


        public Step01BaseAdventForNextYear(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier, ILiturgicalYearFactory liturgicalYearFactory ) 
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
            this.liturgicalYearFactory = liturgicalYearFactory;
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, Model.LiturgicalYear _currentLiturgicalYear)
        {

            if (workingResult == null) {
                throw new ArgumentNullException(nameof(workingResult));
            }

            var firstDateInNewYear = workingResult.Input.FirstSundayOfAdventTheFollowingYear.Value;

            var newYearLiturgicalYear = liturgicalYearFactory.Get(firstDateInNewYear, firstDateInNewYear.AddDays(1));
            var applicableRules = ApplicableRules(newYearLiturgicalYear.RclYear);
            var ruleToStartWith = applicableRules.FirstOrDefault(); // the first sunday of advent

            // apply to start of next year (see populate dates step, some rules transfer across lectionary years)
            if (firstDateInNewYear.DayOfWeek != DayOfWeek.Sunday)
            {
                throw new ArgumentException($"Expected the first day of next year to be a Sunday, but it was {firstDateInNewYear.DayOfWeek} ({firstDateInNewYear}).  The first day should be the 1st Sunday of Advent.", nameof(workingResult.Result));
            }

            workingResult = ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, newYearLiturgicalYear, applicableRules, firstDateInNewYear, ruleToStartWith, null);

            return workingResult;
        }

    }
}
