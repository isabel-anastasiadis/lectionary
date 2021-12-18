
using static ReadingsBuilder.Model.Year;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class PopulateDates : IStep
    {
        public int Order => 0;

        public PipelineResult RunStep(PipelineResult input)
        {
            if (input == null) {
                throw new ArgumentNullException(nameof(input));
            }

            if (input.Metadata == null) { 
                throw new ArgumentNullException(nameof(input.Metadata));
            }

            if (input?.Metadata?.StartDate == null) { 
                throw new ArgumentNullException(nameof(input.Metadata.StartDate));
            }

            if (input?.Metadata?.EndDate == null)
            {
                throw new ArgumentNullException(nameof(input.Metadata.EndDate));
            }

            input.Year = new Year();

            var currentDate = input.Metadata.StartDate;
            while (true)
            {
                input.Year.Days[currentDate] = new Option<Day, DayOptionType>() {
                    OptionOne = new Day() { 
                        Date = currentDate
                    }
                };
                currentDate = currentDate.AddDays(1);

                if (currentDate > input.Metadata.EndDate) {
                    break;
                }
            }

            return input;
        }
    }
}
