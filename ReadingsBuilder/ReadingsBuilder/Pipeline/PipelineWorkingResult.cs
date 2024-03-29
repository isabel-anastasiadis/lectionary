﻿using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Model;

namespace ReadingsBuilder.Pipeline
{
    public class PipelineWorkingResult
    {

        public PipelineWorkingResult()
        {
            Result = new Dictionary<DateOnly, Option<Day, DayOptionType>>();
        }

        public Input? Input { get; set; }

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
