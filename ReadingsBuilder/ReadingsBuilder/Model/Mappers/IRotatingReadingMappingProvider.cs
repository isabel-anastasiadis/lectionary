
using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Mappers
{
    public interface IRotatingReadingMappingProvider
    {
        List<RotatingReadingMapping> RotatingReadingMappings();
    }
}