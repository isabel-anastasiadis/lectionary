
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps
{
    public interface IStep
    {
        public int Order { get; }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult);
    }
}
