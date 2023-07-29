using ReadingsBuilder.Model.DTOs;

namespace ReadingsBuilder.Data.Result
{
    public interface IRotatingReadingMappingProvider
    {
        RotatingReadingMapping? GetApplicableMapping(DateOnly date);
    }
}