

using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class BaseAdvent : IStep
    {
        public int Order => 1;

        public const string Name = "BaseAdvent.cs";

        public readonly List<RuleData> ApplicableRules;

        public readonly List<RotatingReadingMapping> RotatingReadingMappings;
        private readonly IRuleApplier ruleApplier;

        public BaseAdvent(IRuleApplier ruleApplier, IAllDataFactory dataFactory)
        {
            if (dataFactory == null)
            {
                throw new ArgumentNullException(nameof(dataFactory));
            }

            var allData = dataFactory.GenerateAllData();

            if(allData.RotatingReadingMappings == null){ 
                throw new ArgumentNullException(nameof(allData.RotatingReadingMappings));
            }

            if(allData.RuleData == null)
            {
                throw new ArgumentNullException(nameof(allData.RuleData));
            }

            RotatingReadingMappings = allData.RotatingReadingMappings;

            ApplicableRules = allData.RuleData?
                .Where(x => x.HandlingClassName == Name)
                .Where(x => x.RuleType == RuleType.ByDayOfWeek)
                .OrderBy(x => x.RowNumberInRuleSet)
                .ToList() ?? new List<RuleData>();

            if (!ApplicableRules.Any()) 
            {
                throw new ArgumentException("No matching rules were passed in");
            }

            this.ruleApplier = ruleApplier;
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


        private void ApplyRuleToDay(Day day, RuleData ruleData) 
        {
            var rotatingReadingMapping = RotatingReadingMappings.Where(x => x.Year == day.Date.Year).First();
            ruleApplier.ApplyRuleToDay(rotatingReadingMapping, ruleData, day);
        }
    }
}
