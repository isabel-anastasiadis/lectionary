using ReadingsBuilder.Model;

namespace ReadingsBuilder.Model
{

    public enum ReadingsOptionType { 
        Default
    }


    public class Day {

        public Day() { 
            MorningReadings = new Option<MorningReadings, ReadingsOptionType>();
            EveningReadings = new Option<EveningReadings, ReadingsOptionType>();
        }    

        public DateOnly Date {get; set;}

        public string? DayDescription {get; set;}

        public Option<MorningReadings, ReadingsOptionType>? MorningReadings {get; set;}

        public Option<EveningReadings, ReadingsOptionType>? EveningReadings {get; set;}

    }

}


