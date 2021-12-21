

namespace ReadingsBuilder.Model.Pipeline
{
    public class PipelineWorkingResult
    {

        public PipelineWorkingResult()
        {
            Result = new Dictionary<DateOnly, Option<Day, DayOptionType>>();
        }

        public Input? Input { get; set; }

        public AllData? AllData { get; set; }

        public Dictionary<DateOnly, Option<Day, DayOptionType>> Result { get; }

    }

    public enum DayOptionType
    {
        None,
        CelebrateOnOriginalDay,
        CelebrateOnClosestSunday
    }

}
