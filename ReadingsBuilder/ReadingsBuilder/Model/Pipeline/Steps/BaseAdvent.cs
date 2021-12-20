

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class BaseAdvent : IStep
    {
        public int Order => 1;

        public const string Name = "BaseAdvent.cs";

        public readonly List<RuleData> ApplicableRules;

        public readonly List<RotatingReadingMapping> RotatingReadingMappings;
        private readonly RuleApplier ruleApplier;

        public BaseAdvent(RuleApplier ruleApplier, AllData allData)
        {

            if (allData == null) {
                throw new ArgumentNullException(nameof(allData));
            }

            RotatingReadingMappings = allData.RotatingReadingMappings;

            if(allData.RuleData == null)
            {
                throw new ArgumentNullException(nameof(allData.RuleData));
            }

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

        public PipelineResult RunStep(PipelineResult input)
        {
           
            // work out what one to start with - the rule in the first week with the same DayOfWeek
            var firstDayInYear = input?.Year?.Days?.Keys.OrderBy(x => x).First();

            if (firstDayInYear?.Month != 12 || firstDayInYear?.Day != 1) {
                throw new ArgumentException($"Expected the first day in the year to be December 1st, but it was {firstDayInYear}", nameof(input.Year.Days));
            }

            var ruleDataToStartWith = ApplicableRules?.GetRange(0, 7).FirstOrDefault(x => x.Weekday == firstDayInYear?.DayOfWeek);
            if (ruleDataToStartWith != null) 
            { 
                var indexOfFirstRuleToStartWith = ApplicableRules.IndexOf(ruleDataToStartWith);
                var currentDate = firstDayInYear.Value;

                for (int i = indexOfFirstRuleToStartWith; i < indexOfFirstRuleToStartWith + input.Year.Days.Count; i++) 
                { 
                    var ruleData = ApplicableRules[i];
                    var day = input.Year.Days[currentDate].OptionOne;

                    ApplyRuleToDay(day, ruleData);

                    currentDate = currentDate.AddDays(1);
                
                }

            }


            return input;
        }


        private void ApplyRuleToDay(Day day, RuleData ruleData) 
        {
            var rotatingReadingMapping = RotatingReadingMappings.Where(x => x.Year == day.Date.Year).FirstOrDefault();
            ruleApplier.ApplyRuleToDay(rotatingReadingMapping, ruleData, day);
        }
    }
}
