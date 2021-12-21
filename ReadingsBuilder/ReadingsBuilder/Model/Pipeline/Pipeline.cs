
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.Steps;

namespace ReadingsBuilder.Model.Pipeline {

    public class Pipeline {

        // TODO, load in with dependency injection and sort by Order field
        private readonly IList<IStep> _steps;

        public Pipeline()
        {
            var allDataFactory = new AllDataFactory();

            var allData = allDataFactory.GenerateAllData();
            this._steps = new List<IStep>() { 
                new PopulateDates(),
                new BaseAdvent(new RuleApplier(), allData)           
            };
        }

        public PipelineWorkingResult Run(Input metadata) {

            var workingResult = new PipelineWorkingResult() { Input = metadata};

            foreach(var step in _steps) {
                workingResult = step.RunStep(workingResult);
            }

            return workingResult;
        }

    }

}