using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Result
{
    public interface IRotatingReadingMappingProvider
    {
        RotatingReadingMapping? GetApplicableMapping(DateOnly date);
    }
}