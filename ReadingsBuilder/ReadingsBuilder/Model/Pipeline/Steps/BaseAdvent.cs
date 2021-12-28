

using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class BaseAdvent : BaseStep, IStep
    {
        public int Order => 1;

        protected override string RuleSetName => "BaseAdvent.cs";


        public BaseAdvent(IRuleApplier ruleApplier, IAllDataFactory dataFactory) 
            : base(ruleApplier, dataFactory)
        {
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {

            if (workingResult == null) {
                throw new ArgumentNullException(nameof(workingResult));
            }
           
            // work out what one to start with - the rule in the first week with the same DayOfWeek
            var firstDayInYear = workingResult.Result.Keys.OrderBy(x => x).FirstOrDefault();
            if (firstDayInYear.Month != 12 || firstDayInYear.Day != 1) {
                throw new ArgumentException($"Expected the first day in the year to be December 1st, but it was {firstDayInYear}", nameof(workingResult.Result));
            }

            var ruleDataToStartWith = ApplicableRules.GetRange(0, 7).FirstOrDefault(x => x.Weekday == firstDayInYear.DayOfWeek);

            return ApplyRulesByDayOfWeek(workingResult, firstDayInYear, ruleDataToStartWith);
        }

    }
}
