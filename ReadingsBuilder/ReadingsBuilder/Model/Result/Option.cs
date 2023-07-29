namespace ReadingsBuilder.Model.Result
{


    public class Option<T, E> where T : class where E : Enum
    {


        public T? OptionOne { get; set; }

        public E? OptionOneType { get; set; }

        public string? OptionOneDescription { get; set; }

        public T? OptionTwo { get; set; }

        public E? OptionTwoType { get; set; }

        public string? OptionTwoDescription { get; set; }
    }

}