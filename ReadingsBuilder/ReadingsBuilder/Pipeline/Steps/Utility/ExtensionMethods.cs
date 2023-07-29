

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public static class ExtensionMethods
    {

        public static DateOnly Clone(this DateOnly date) {

            return new DateOnly(date.Year, date.Month, date.Day);
        }
    }
}
