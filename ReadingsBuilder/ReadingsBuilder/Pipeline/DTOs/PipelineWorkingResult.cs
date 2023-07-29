using ReadingsBuilder.Model.DTOs;

namespace ReadingsBuilder.Pipeline.DTOs
{
    public class PipelineWorkingResult
    {

        public PipelineWorkingResult()
        {
            Result = new Dictionary<DateOnly, Option<Day, DayOptionType>>();
        }

        public Input? Input { get; set; }

        public List<RuleData>? AllRuleData { get; set; }

        public Dictionary<DateOnly, Option<Day, DayOptionType>> Result { get; }

    }
}

namespace ReadingsBuilder.Pipeline
{
    public enum DayOptionType
    {
        None,
        CelebrateOnOriginalDay,
        CelebrateOnClosestSunday
    }

}
