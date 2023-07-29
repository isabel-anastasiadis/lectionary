using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Result
{
    public interface ILiturgicalYearFactory
    {
        LiturgicalYear? Get(DateOnly date);
    }
}