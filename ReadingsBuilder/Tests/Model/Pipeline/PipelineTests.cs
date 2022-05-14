
using System;
using NUnit.Framework;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace Tests.Model.Pipeline
{
    public class PipelineTests
    {
        [Test]
        public void PipelineRunsFor2022() {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var input = new Input() {
                StartDate = new DateOnly(2021, 12, 1),
                EndDate = new DateOnly(2022, 6, 22), // Haven't done John the Baptist and beyond.  Otherwise done until 4th Sun before Advent
                FifthSundayAfterEpiphany = new DateOnly(2022, 2, 6),
                AshWednesday = new DateOnly(2022, 3, 2),
                PalmSunday = new DateOnly(2022, 4, 10),
                FirstSundayOfAdvent = new DateOnly(2022, 11, 27),
                OrdinaryTimePsalmsFirstChunkStartingIndex = 8, // haven't worked out the rule for these so you just have to check
                OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
            };

            // act
            var result = classUnderTest.Run(input);

            // assert
            Assert.IsNotNull(result);
        }
    }
}
