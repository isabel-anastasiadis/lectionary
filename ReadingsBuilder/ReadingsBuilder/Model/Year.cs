namespace ReadingsBuilder.Model
{
    public class Year {

        public Year()
        {
            Days = new Dictionary<DateOnly, Option<Day>>();
        }

        public Dictionary<DateOnly, Option<Day>>? Days {get; }


    }

}
