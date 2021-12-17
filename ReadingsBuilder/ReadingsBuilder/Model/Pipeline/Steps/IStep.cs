
using ReadingsBuilder.Model;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public interface IStep
    {
        public int Order { get; }

        public PipelineResult RunStep(PipelineResult input);
    }
}
