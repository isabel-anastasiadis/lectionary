using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline
{
    public interface IPipeline
    {
        PipelineWorkingResult Run(Input metadata);
    }
}