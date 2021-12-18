using System;
using NUnit.Framework;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.Steps;

namespace Tests.Model.Pipeline.Steps
{
    public class PopulateDatesTests
    {
        [Test]
        public void ChecksParamsCorrectly() {

            // arrange
            var pipelineResult = new PipelineResult();
            var classUnderTest = new PopulateDates();

            // act & assert
            try
            {
                classUnderTest.RunStep(pipelineResult);
                Assert.Fail("Should have thrown ArgumentNullException");

            }
            catch (ArgumentNullException) {
                Assert.Pass();
            }
        }

        [Test]
        public void YearIsInitialised() {
            // arrange
            var pipelineResult = new PipelineResult()
            {
                Metadata = new Metadata
                {
                    StartDate = new System.DateOnly(2021, 1, 1),
                    EndDate = new System.DateOnly(2021, 1, 31)
                }
            };
            var classUnderTest = new PopulateDates();

            // act
            var result = classUnderTest.RunStep(pipelineResult);

            // assert
            Assert.IsNotNull(result.Year);
            Assert.IsNotNull(result?.Year?.Days);

        }

        [Test]
        public void PopulatesDatesForRangeSpecified() {
            // arrange
            var pipelineResult = new PipelineResult() { 
                Metadata = new Metadata { 
                    StartDate = new System.DateOnly(2021,1,1),
                    EndDate = new System.DateOnly(2021,1,31)
                }
            };
            var classUnderTest = new PopulateDates();

            // act
            var result = classUnderTest.RunStep(pipelineResult);

            // assert
            Assert.IsNotNull(result);
            Assert.AreEqual(result?.Year?.Days?.Count, 31);
        }
    }
}
