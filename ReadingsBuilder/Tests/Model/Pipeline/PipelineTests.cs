
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
                StartDate = new System.DateOnly(),
                EndDate = new System.DateOnly()
            };

            // act
            var result = classUnderTest.Run(metadata);

            // assert
            Assert.IsNotNull(result);
        }
    }
}
