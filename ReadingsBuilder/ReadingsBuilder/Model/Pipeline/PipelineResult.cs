

using ReadingsBuilder.Model.Data;

namespace ReadingsBuilder.Model.Pipeline
{
    public class PipelineResult
    {
        public Metadata? Metadata { get; set; }

        public Year? Year { get; set; }
    
    }


    public class Metadata {
        public DateOnly StartDate { get; set; }

        public DateOnly EndDate { get; set; }

    }


}
