
using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Mappers
{
    public interface IRotatingReadingMappingProvider
    {
        RotatingReadingMapping? GetApplicableMapping(DateOnly date);
    }
}