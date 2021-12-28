using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Pipeline.DTOs
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
}

namespace ReadingsBuilder.Model.Pipeline
{
    public enum DayOptionType
    {
        None,
        CelebrateOnOriginalDay,
        CelebrateOnClosestSunday
    }

}
