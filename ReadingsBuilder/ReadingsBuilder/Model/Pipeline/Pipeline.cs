
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps;

namespace ReadingsBuilder.Model.Pipeline
{

    public class Pipeline : IPipeline
    {
        private readonly IList<IStep> _steps;

        public Pipeline(IEnumerable<IStep> allSteps)
        {
            this._steps = allSteps.OrderBy(s => s.Order).ToList();
        }

        public PipelineWorkingResult Run(Input metadata)
        {

            var workingResult = new PipelineWorkingResult() { Input = metadata };

            foreach (var step in _steps)
            {
                workingResult = step.RunStep(workingResult);
            }

            return workingResult;
        }

    }

}