

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
            var firstDayInYear = workingResult.Result.Keys.OrderBy(x => x).First();
            if (firstDayInYear.Month != 12 || firstDayInYear.Day != 1) {
                throw new ArgumentException($"Expected the first day in the year to be December 1st, but it was {firstDayInYear}", nameof(workingResult.Result));
            }

            var ruleDataToStartWith = ApplicableRules.GetRange(0, 7).FirstOrDefault(x => x.Weekday == firstDayInYear.DayOfWeek);

            if (ruleDataToStartWith != null) 
            {
                var indexOfFirstRuleToStartWith = ApplicableRules.IndexOf(ruleDataToStartWith);
                var currentDate = firstDayInYear;

                for (int i = indexOfFirstRuleToStartWith; i < indexOfFirstRuleToStartWith + workingResult.Result.Count; i++) 
                { 
                    var ruleData = ApplicableRules[i];
                    var day = workingResult.Result[currentDate].OptionOne;

                    if (day == null) 
                    {
                        throw new ArgumentNullException($"Expected the {nameof(workingResult)}.{nameof(workingResult.Result)} to have a non-null day corresponding to '{currentDate}'");
                    }

                    ApplyRuleToDay(day, ruleData);

                    currentDate = currentDate.AddDays(1);
                
                }

            }

            return workingResult;
        }

    }
}
