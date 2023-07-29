
using System;
using NUnit.Framework;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Pipeline.DTOs;

namespace Tests.Model.Pipeline
{
    public class PipelineTests
    {
        [Test]
        public void PipelineRunsFor2022() {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var input = new Input() {
                StartDate = new DateOnly(2021, 11, 28),
                EndDate = new DateOnly(2022, 10, 30), // Haven't done Transfiguration of the Beloved Son and beyond for set feastival days.  Otherwise done until 4th Sun before Advent.
                FifthSundayAfterEpiphany = new DateOnly(2022, 2, 6),
                AshWednesday = new DateOnly(2022, 3, 2),
                PalmSunday = new DateOnly(2022, 4, 10),
                FirstSundayOfAdvent = new DateOnly(2022, 11, 27),
                OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
            };

            // act
            var result = classUnderTest.Run(input);

            // assert
            Assert.IsNotNull(result);
        }
    }
}
