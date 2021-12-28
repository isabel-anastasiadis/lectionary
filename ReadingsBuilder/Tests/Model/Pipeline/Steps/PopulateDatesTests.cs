using System;
using NUnit.Framework;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps;

namespace Tests.Model.Pipeline.Steps
{
    public class PopulateDatesTests
    {
        [Test]
        public void ChecksParamsCorrectly() {

            // arrange
            var pipelineResult = new PipelineWorkingResult();
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
        public void ResultIsInitialised() {
            // arrange
            var pipelineResult = new PipelineWorkingResult()
            {
                Input = new Input
                {
                    StartDate = new DateOnly(2021, 1, 1),
                    EndDate = new DateOnly(2021, 1, 31)
                }
            };
            var classUnderTest = new PopulateDates();

            // act
            var workingResult = classUnderTest.RunStep(pipelineResult);

            // assert
            Assert.IsNotNull(workingResult.Result);

        }

        [Test]
        public void PopulatesDatesForRangeSpecified() {
            // arrange
            var pipelineResult = new PipelineWorkingResult() { 
                Input = new Input { 
                    StartDate = new System.DateOnly(2021,1,1),
                    EndDate = new System.DateOnly(2021,1,31)
                }
            };
            var classUnderTest = new PopulateDates();

            // act
            var workingResult = classUnderTest.RunStep(pipelineResult);

            // assert
            Assert.IsNotNull(workingResult);
            Assert.AreEqual(workingResult?.Result.Count, 31);
        }

        [Test]
        public void EachDayOptionHasTheDayInitialised()
        {
            // arrange
            var date = new DateOnly(2021, 1, 1);

            var pipelineResult = new PipelineWorkingResult()
            {
                Input = new Input
                {
                    StartDate = date,
                    EndDate = date
                }
            };
            var classUnderTest = new PopulateDates();

            // act
            var workingResult = classUnderTest.RunStep(pipelineResult);

            // assert
            Assert.IsNotNull(workingResult.Result[date]?.OptionOne);
            Assert.AreEqual(date, workingResult.Result[date]?.OptionOne?.Date);
        }
    }
}
