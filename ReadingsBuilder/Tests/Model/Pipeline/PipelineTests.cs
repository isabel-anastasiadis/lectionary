
using NUnit.Framework;
using ReadingsBuilder.Model.Pipeline;

namespace Tests.Model.Pipeline
{
    public class PipelineTests
    {
        [Test]
        public void PipelineRuns() {

            // arrange
            var classUnderTest = new ReadingsBuilder.Model.Pipeline.Pipeline();
            var metadata = new Metadata() {
                StartDate = new System.DateOnly(2021,12,1),
                EndDate = new System.DateOnly(2021,12,15)
            };

            // act
            var result = classUnderTest.Run(metadata);

            // assert
            Assert.IsNotNull(result);
        }
    }
}
