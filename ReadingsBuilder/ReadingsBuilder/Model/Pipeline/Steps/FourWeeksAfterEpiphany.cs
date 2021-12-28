
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class FourWeeksAfterEpiphany : BaseStep, IStep
    {
        public FourWeeksAfterEpiphany(IRuleApplier ruleApplier, IAllDataFactory dataFactory) : base(ruleApplier, dataFactory)
        {
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

            if (dateOfFirstDayTheRuleAppliesTo == default(DateOnly))
            {
                return workingResult;
            }

            var ruleDataToStartWith = ApplicableRules.FirstOrDefault();

            return ApplyRulesByDayOfWeek(workingResult, dateOfFirstDayTheRuleAppliesTo, ruleDataToStartWith);

        }
    }
}
