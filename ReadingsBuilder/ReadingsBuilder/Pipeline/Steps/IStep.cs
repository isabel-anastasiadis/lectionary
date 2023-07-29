
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.DTOs;

namespace ReadingsBuilder.Pipeline.Steps
{
    public interface IStep
    {
        public int Order { get; }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult);
    }
}
