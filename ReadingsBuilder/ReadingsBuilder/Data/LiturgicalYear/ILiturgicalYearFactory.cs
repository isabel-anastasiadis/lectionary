using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Result
{
    public interface ILiturgicalYearFactory
    {
        /// <summary>
        /// Returns the matching Liturgical Year.
        /// Will throw an exception if it doesn't match exactly one LiturgicalYear.
        /// </summary>
        LiturgicalYear Get(DateOnly startDate, DateOnly endDate);
    }
}