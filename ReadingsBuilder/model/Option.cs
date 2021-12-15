namespace model
{

    public enum DefaultOptionType {
        Default
    }

    public class Option<T, E> where T: class where E: Enum {
        
        public Option(T optionOne, E optionOneType, string? optionOneDescription = null,  T? optionTwo = null, E? optionTwoType = default(E?), string? optionTwoDescription = null)
        {
            this.OptionOne = optionOne;
            this.OptionOneType = optionOneType;
            this.OptionOneDescription = optionOneDescription;
            this.OptionTwo = optionTwo;
            this.OptionTwoType = optionTwoType;
            this.OptionTwoDescription = optionTwoDescription;
        }
        
        public T OptionOne {get;}

        public E OptionOneType {get;}

        public string? OptionOneDescription {get;}

        public T? OptionTwo {get;}

        public E? OptionTwoType {get;}

        public string? OptionTwoDescription {get;}
    }

    public class Option<T>: Option<T, DefaultOptionType> where T: class {
        public Option(T optionOne, 
            string? optionOneDescription = null, 
            T? optionTwo = null, 
            string? optionTwoDescription = null): 
            base(optionOne, DefaultOptionType.Default, optionOneDescription, optionTwo, DefaultOptionType.Default, optionTwoDescription)
        {

        }
    }

}