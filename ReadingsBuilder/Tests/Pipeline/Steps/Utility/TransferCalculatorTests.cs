
using System;
using System.Linq;
using NUnit.Framework;
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Pipeline.Steps;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace Tests.Pipeline.Steps.Utility
{
    public class TransferCalculatorTests
    {
        private PipelineWorkingResult GetWorkingResultMinusFeastDays(Input input) 
        {
            var allStepsExceptFeastDays = DependencyInjector.GetAllInstances<IStep>().Where(s => s.GetType() != typeof(Step12FeastDaysByDayOfMonth));
            var pipeline = new ReadingsBuilder.Pipeline.Pipeline(allStepsExceptFeastDays, DependencyInjector.GetInstance<ILiturgicalYearFactory>());
            var workingResult = pipeline.Run(input);
            return workingResult;
        }

        [TestCase(2024, 3, 24)]
        [TestCase(2024, 3, 25)]
        [TestCase(2024, 3, 26)]
        [TestCase(2024, 3, 27)]
        [TestCase(2024, 3, 28)]
        [TestCase(2024, 3, 29)]
        [TestCase(2024, 3, 30)]
        [TestCase(2024, 3, 31)]
        [TestCase(2024, 4, 1)]
        [TestCase(2024, 4, 2)]
        [TestCase(2024, 4, 3)]
        [TestCase(2024, 4, 4)]
        [TestCase(2024, 4, 5)]
        [TestCase(2024, 4, 6)]
        public void ReturnsMondayAfterSecondSundayOfEasterIfInHolyOrEasterWeek(int year, int month, int day) {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, new DateOnly(year, month, day));

            // assert
            var newDay = workingResult.Result[newDate.Value]?.OptionOne;
            Assert.AreEqual("Week of 2nd Sunday of Easter", newDay?.DayDescription);
            Assert.AreEqual(DayOfWeek.Monday, newDate.Value.DayOfWeek);
        }

        [TestCase(2024, 4, 7, Description = "First Sunday in Eastertide (but not Holy or Easter Week)")]
        [TestCase(2024, 4, 14, Description = "The next Sunday in Eastertide (but not Holy or Easter Week)")]
        public void ReturnsNextMondayIfSundayInEastertide(int year, int month, int day)
        {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            var originalDate = new DateOnly(year, month, day);

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, originalDate);

            // assert
            Assert.AreEqual(DayOfWeek.Monday, newDate.Value.DayOfWeek);
            Assert.AreEqual(1, newDate.Value.DayNumber - originalDate.DayNumber);
        }

        [TestCase(2024, 3, 24, Description = "In Holy Week")]
        [TestCase(2024, 3, 25, Description = "Another day in Holy Week")]
        [TestCase(2024, 4, 2, Description = "In Easter Week")]
        [TestCase(2024, 4, 7, Description = "A Sunday in Eastertide (but not Holy or Easter Week)")]
        public void ReturnsNextTuesdayIfMondayIsTakenByFestival(int year, int month, int day)
        {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            // Add a festival to the Monday
            var mondayDay = workingResult.Result[new DateOnly(2024, 4, 8)].OptionOne;
            mondayDay.FeastOrSeasonType |= FeastOrSeasonType.Festival;

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, new DateOnly(year, month, day));

            // assert
            Assert.AreEqual(DayOfWeek.Tuesday, newDate.Value.DayOfWeek);
        }

        [TestCase(2024, 3, 24, Description = "In Holy Week")]
        [TestCase(2024, 3, 25, Description = "Another day in Holy Week")]
        [TestCase(2024, 4, 2, Description = "In Easter Week")]
        [TestCase(2024, 4, 7, Description = "A Sunday in Eastertide (but not Holy or Easter Week)")]
        public void ReturnsNextTuesdayIfMondayIsTakenByPrincipalFeast(int year, int month, int day)
        {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            // Add a festival to the Monday
            var mondayDay = workingResult.Result[new DateOnly(2024, 4, 8)].OptionOne;
            mondayDay.FeastOrSeasonType |= FeastOrSeasonType.PrincipalFeast;

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, new DateOnly(year, month, day));

            // assert
            var newDay = workingResult.Result[newDate.Value]?.OptionOne;
            Assert.AreEqual("Week of 2nd Sunday of Easter", newDay?.DayDescription);
            Assert.AreEqual(DayOfWeek.Tuesday, newDate.Value.DayOfWeek);
        }

        [TestCase(2024, 3, 24, Description = "In Holy Week")]
        [TestCase(2024, 3, 25, Description = "Another day in Holy Week")]
        [TestCase(2024, 4, 2, Description = "In Easter Week")]
        [TestCase(2024, 4, 7, Description = "A Sunday in Eastertide (but not Holy or Easter Week)")]
        public void ReturnsNextTuesdayIfMondayIsTakenByPrincipalHolyDay(int year, int month, int day)
        {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            // Add a festival to the Monday
            var mondayDay = workingResult.Result[new DateOnly(2024, 4, 8)].OptionOne;
            mondayDay.FeastOrSeasonType |= FeastOrSeasonType.PrincipalFeast;

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, new DateOnly(year, month, day));

            // assert
            var newDay = workingResult.Result[newDate.Value]?.OptionOne;
            Assert.AreEqual("Week of 2nd Sunday of Easter", newDay?.DayDescription);
            Assert.AreEqual(DayOfWeek.Tuesday, newDate.Value.DayOfWeek);
        }


        [TestCase(2024, 3, 23, Description = "Saturday the day before Holy Week")]
        [TestCase(2024, 4, 8, Description = "Monday after Easter week (still in eastertide)")]
        public void ReturnsNullIfNotInHolyOrEasterWeekOrSundayInEastertide(int year, int month, int day) {
            // arrange
            var classUnderTest = new TransferCalculator();

            // 2024 palm sunday to 2nd sunday of easter: 24th March - 7th April inclusive
            var workingResult = GetWorkingResultMinusFeastDays(Inputs.FOR_2023_TO_2024);

            // act
            var newDate = classUnderTest.GetNextAvailableDate(FeastOrSeasonType.Festival, workingResult, new DateOnly(year, month, day));

            // assert
            Assert.IsNull(newDate);
        }

    }
}
