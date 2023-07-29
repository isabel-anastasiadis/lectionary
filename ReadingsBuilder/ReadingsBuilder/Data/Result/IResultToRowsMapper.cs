using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Pipeline.DTOs;

namespace ReadingsBuilder.Data.Result
{
    public interface IResultToRowsMapper
    {
        List<List<string>> Map(Dictionary<DateOnly, Option<Day, DayOptionType>> result);
    }
}