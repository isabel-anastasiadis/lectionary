
using ReadingsBuilder.Model.Pipeline.Steps;

namespace ReadingsBuilder.Model.Pipeline {

    public class Pipeline {

        // TODO, load in with dependency injection and sort by Order field
        private readonly IList<IStep> _steps = new List<IStep>() { 
            new PopulateDates()
        };

        public void InitialiseSteps() { 
        
        
        }

        public PipelineResult Run(Metadata metadata) {

            var workingResult = new PipelineResult() { Metadata = metadata};

            foreach(var step in _steps) {
                workingResult = step.RunStep(workingResult);
            }

            return workingResult;
        }

    }

}