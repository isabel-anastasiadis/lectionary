
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step03FourWeeksAfterEpiphany : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step03FourWeeksAfterEpiphany(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 3;

        protected override string RuleSetName => "FourWeeksAfterEpiphany.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            // work out what one to start with
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Result.Keys
                .OrderBy(x => x)
                .Where(x => x.Month == 1 && x.Day > 6 && x.DayOfWeek == DayOfWeek.Saturday)  // The first Saturday after the 6th Jan
                .FirstOrDefault();

            var RulesToStartWith = ApplicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, dateOfFirstDayTheRuleAppliesTo, RulesToStartWith, null);

        }
    }
}
