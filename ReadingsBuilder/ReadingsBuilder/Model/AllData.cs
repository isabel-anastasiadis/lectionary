
using ReadingsBuilder.Model.Pipeline;

namespace ReadingsBuilder.Model
{
    public class AllData
    {
        public List<RuleData> RuleData { get; set; }

        public List<RotatingReadingMapping> RotatingReadingMappings {get; set;}
    }
}
