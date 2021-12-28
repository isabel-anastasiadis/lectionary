using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline
{
    public interface IPipeline
    {
        PipelineWorkingResult Run(Input metadata);
    }
}