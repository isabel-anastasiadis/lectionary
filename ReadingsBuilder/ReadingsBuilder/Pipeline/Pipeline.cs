
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps;

namespace ReadingsBuilder.Pipeline
{

    public class Pipeline : IPipeline
    {
        private readonly IList<IStep> _steps;
        private readonly ILiturgicalYearFactory _liturgicalYearFactory;

        public Pipeline(IEnumerable<IStep> allSteps, ILiturgicalYearFactory liturgicalYearFactory)
        {
            this._steps = allSteps.OrderBy(s => s.Order).ToList();
            this._liturgicalYearFactory = liturgicalYearFactory;
        }

        public PipelineWorkingResult Run(Input metadata)
        {
            var workingResult = new PipelineWorkingResult() { 
                Input = metadata
            };

            var liturgicalYear = _liturgicalYearFactory.Get(metadata.StartDate, metadata.EndDate);

            foreach (var step in _steps)
            {
                workingResult = step.RunStep(workingResult, liturgicalYear);
            }

            return workingResult;
        }

    }

}