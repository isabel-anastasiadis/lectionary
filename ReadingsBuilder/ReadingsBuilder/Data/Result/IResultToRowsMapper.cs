using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Data.Result
{
    public interface IResultToRowsMapper
    {
        List<List<string>> Map(Dictionary<DateOnly, Option<Day, DayOptionType>> result);
    }
}