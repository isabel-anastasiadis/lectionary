

using ReadingsBuilder.Model.Data;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class BaseAdvent : IStep
    {
        public int Order => 1;

        public const string Name = "BaseAdvent.cs";

        private readonly List<RuleData> _rules;

        public BaseAdvent(IList<RuleData>? allRuleData)
        {

            if(allRuleData == null)
            {
                throw new ArgumentNullException(nameof(allRuleData));
            }

            _rules = allRuleData?
                .Where(x => x.HandlingClassName == Name)
                .Where(x => x.RuleType == RuleType.ByDayOfWeek)
                .OrderBy(x => x.RowNumberInRuleSet)
                .ToList() ?? new List<RuleData>();

            if (!_rules.Any()) 
            {
                throw new ArgumentException("No matching rules were passed in");
            }

        }

        public PipelineResult RunStep(PipelineResult input)
        {
           
            // work out what one to start with - the rule in the first week with the same DayOfWeek
            var firstDayInYear = input?.Year?.Days?.Keys.OrderBy(x => x).First();

            if (firstDayInYear?.Month != 12 || firstDayInYear?.Day != 1) {
                throw new ArgumentException($"Expected the first day in the year to be December 1st, but it was {firstDayInYear}", nameof(input.Year.Days));
            }

            var ruleDataToStartWith = _rules?.GetRange(0, 7).FirstOrDefault(x => x.Weekday == firstDayInYear?.DayOfWeek);
            if (ruleDataToStartWith != null) 
            { 
                var indexOfFirstRuleToStartWith = _rules.IndexOf(ruleDataToStartWith);
                var currentDate = firstDayInYear.Value;

                for (int i = indexOfFirstRuleToStartWith; i < indexOfFirstRuleToStartWith + input.Year.Days.Count; i++) 
                { 
                    var ruleData = _rules[indexOfFirstRuleToStartWith];
                    var day = input.Year.Days[currentDate].OptionOne;

                    day.DayDescription = ruleData.DayName;

                    currentDate = currentDate.AddDays(1);
                
                }

            }


            return input;
        }
    }
}
