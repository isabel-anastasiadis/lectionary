
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public interface IStep
    {
        public int Order { get; }

        public PipelineWorkingResult RunStep(PipelineWorkingResult input);
    }
}
