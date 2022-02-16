
using NUnit.Framework;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace Tests.Model.Pipeline
{
    public class PipelineTests
    {
        [Test]
        public void PipelineRuns() {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var input = new Input() {
                StartDate = new System.DateOnly(2021,12,1),
                EndDate = new System.DateOnly(2022,6,5),
                PalmSunday = new System.DateOnly(2022,4,10)
            };

            // act
            var result = classUnderTest.Run(input);

            // assert
            Assert.IsNotNull(result);
        }
    }
}
