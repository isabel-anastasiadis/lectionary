using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.Steps;

namespace Tests.Model.Pipeline.Steps
{
    public class BaseAdventTests
    {

        private List<RuleData> _defaultRules = new List<RuleData>() {
            new RuleData(){
                    RowNumberInRuleSet = 0,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "First Sunday of advent",
                    Weekday = DayOfWeek.Sunday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Monday in first week of advent",
                    Weekday = DayOfWeek.Monday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Tuesday in first week of advent",
                    Weekday = DayOfWeek.Tuesday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Wednesday in first week of advent",
                    Weekday = DayOfWeek.Wednesday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Thursday in first week of advent",
                    Weekday = DayOfWeek.Thursday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Friday in first week of advent",
                    Weekday = DayOfWeek.Friday
            },
            new RuleData(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = BaseAdvent.Name,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Saturday in first week of advent",
                    Weekday = DayOfWeek.Saturday
            },
        };

        private BaseAdvent ClassUnderTest(List<RuleData>? ruleData = null)
        {
            var allRules = ruleData ?? _defaultRules;
            return new BaseAdvent(new RuleApplier(), new AllData { RuleData = allRules, RotatingReadingMappings = new RotatingReadingMappingMapper().RotatingReadingMappings()});
        }


        [Test]
        public void ChecksConstructorParamForNullRules()
        {

            // arrange

            // act & assert
            try
            {
                new BaseAdvent(new RuleApplier(), null);
                Assert.Fail("Should have thrown ArgumentNullException");

            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }
        }

        [TestCase(BaseAdvent.Name, RuleType.ByDayOfWeek, true)]
        [TestCase("SomeOtherClass.cs", RuleType.ByDayOfWeek, false)]
        public void ConstructorRequiresAtLeastOneMatchingRule(string handlingClassName, RuleType ruleType, bool shouldPass)
        {

            // arrange

            // act & assert
            try
            {
                ClassUnderTest(new List<RuleData>() {
                    new RuleData(){
                        HandlingClassName = handlingClassName,
                        RuleType = ruleType
                    }
                });
                if (!shouldPass)
                {
                    Assert.Fail("Should have thrown ArgumentException");
                }


            }
            catch (ArgumentException)
            {
                if (shouldPass)
                {
                    Assert.Fail("Should not have thrown ArgumentException");
                }
            }
        }

        [Test]
        public void RunStepEnsuresTheYearStartsWithDecFirst()
        {

            // arrange
            var workingResult = new PipelineWorkingResult();

            workingResult.Result[new DateOnly(2021, 12, 2)] = new Option<Day, DayOptionType>()
            {
                OptionOne = new Day()
            };

            var classUnderTest = ClassUnderTest();

            // act & assert
            try
            {
                classUnderTest.RunStep(workingResult);
                Assert.Fail("Should have thrown ArgumentException");

            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }

        }

        [Test]
        public void RunStepPicksTheRightRuleForDay1()
        {

            // arrange
            var dateOfDay = new DateOnly(2021, 12, 1); // WED
            var workingResult = CreateWorkingResultWithInitialisedDays(new List<DateOnly>() { dateOfDay });

            var classUnderTest = ClassUnderTest();

            var expectedDayDescription = _defaultRules.First(x => x.Weekday == DayOfWeek.Wednesday).DayName;

            // act
            var result = classUnderTest.RunStep(workingResult);
            var resultDescripition = result?.Result[dateOfDay]?.OptionOne?.DayDescription;


            // assert
            Assert.AreEqual(expectedDayDescription, resultDescripition);

        }


        [Test]
        public void RunStepAppliesTheRulesConsecutivelyFromDay1()
        {

            // arrange
            var days = new List<DateOnly> { 
                new DateOnly(2021, 12, 1),
                new DateOnly(2021, 12, 2),
                new DateOnly(2021, 12, 3),
                new DateOnly(2021, 12, 4),
            };
            var workingResult = CreateWorkingResultWithInitialisedDays(days);

            var classUnderTest = ClassUnderTest();


            // act
            var result = classUnderTest.RunStep(workingResult);


            // assert
            foreach (var date in result.Result.Keys) 
            {
                var dayOfWeek = date.DayOfWeek;
                var expectedDescription = _defaultRules.First(x => x.Weekday == dayOfWeek).DayName;
                var resultDescripition = result.Result[date]?.OptionOne?.DayDescription;

                Assert.AreEqual(expectedDescription, resultDescripition);
            }

        }



        private PipelineWorkingResult CreateWorkingResultWithInitialisedDays(List<DateOnly> dates) {
            var workingResult = new PipelineWorkingResult();
            foreach (var date in dates) { 
                workingResult.Result[date] = new Option<Day, DayOptionType>()
                {
                    OptionOne = new Day() { 
                        Date = date
                    }
                };
            }

            return workingResult;

        }

    }
}
