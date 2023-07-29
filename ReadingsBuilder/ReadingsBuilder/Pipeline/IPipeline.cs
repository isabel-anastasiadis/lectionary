using ReadingsBuilder.Pipeline.DTOs;

namespace ReadingsBuilder.Pipeline
{
    public interface IPipeline
    {
        PipelineWorkingResult Run(Input metadata);
    }
}