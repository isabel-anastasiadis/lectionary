
using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step00PopulateDates : IStep
    {
        public int Order => 0;

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
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


            var currentDate = workingResult.Input.StartDate.Value;
            while (true)
            {
                workingResult.Result[currentDate] = new Option<Day, DayOptionType>() {
                    OptionOne = new Day() { 
                        Date = currentDate
                    }
                };
                currentDate = currentDate.AddDays(1);

                if (currentDate > workingResult.Input.EndDate) {
                    break;
                }
            }

            return workingResult;
        }
    }
}
