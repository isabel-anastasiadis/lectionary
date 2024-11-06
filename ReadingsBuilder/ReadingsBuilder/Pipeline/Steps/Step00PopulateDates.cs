
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step00PopulateDates : IStep
    {
        public int Order => 0;

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            if (workingResult == null) {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input == null) { 
                throw new ArgumentNullException(nameof(workingResult.Input));
            }

            if (workingResult?.Input?.StartDate == null) { 
                throw new ArgumentNullException(nameof(workingResult.Input.StartDate));
            }

            if (workingResult?.Input?.EndDate == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.EndDate));
            }


            var currentDate = workingResult.Input.StartDate;
            while (true)
            {
                workingResult.Result[currentDate] = new Option<Day, DayOptionType>() {
                    OptionOne = new Day() { 
                        Date = currentDate
                    }
                };
                currentDate = currentDate.AddDays(1);

                // NOTE: this is because transfers can be pushed to the next year, so we need the very first part of next year populated, just in case (eg. 30 Nov 2025 St Andrew)
                // But also we can't publish the next year until the previous year has finished, so it gives us a buffer.
                var twoDaysAfterEndDate = workingResult.Input.EndDate.AddDays(workingResult.Input.DaysToPopulateForNextYear);
                if (currentDate > twoDaysAfterEndDate) {
                    break;
                }
            }

            return workingResult;
        }
    }
}
