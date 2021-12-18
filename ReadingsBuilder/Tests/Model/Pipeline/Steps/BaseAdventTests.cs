﻿using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.Steps;
using static ReadingsBuilder.Model.Year;

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
            return new BaseAdvent(ruleData ?? _defaultRules);
        }


        [Test]
        public void ChecksConstructorParamForNull()
        {

            // arrange

            // act & assert
            try
            {
                new BaseAdvent(null);
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
                new BaseAdvent(new List<RuleData>() {
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
            var year = new Year();
            year.Days[new DateOnly(2021, 12, 2)] = new Option<Day, DayOptionType>()
            {
                OptionOne = new Day()
            };

            var classUnderTest = ClassUnderTest();

            // act & assert
            try
            {
                classUnderTest.RunStep(new PipelineResult() { Year = year });
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
            var year = new Year();
            var dateOfDay = new DateOnly(2021, 12, 1);
            year.Days[dateOfDay] = new Option<Day, DayOptionType>()
            {
                OptionOne = new Day()
            };

            var classUnderTest = ClassUnderTest();

            var expectedDayDescription = _defaultRules.First(x => x.Weekday == DayOfWeek.Wednesday).DayName;

            // act
            var result = classUnderTest.RunStep(new PipelineResult() { Year = year });
            var resultDescripition = result?.Year?.Days[dateOfDay]?.OptionOne?.DayDescription;


            // assert
            Assert.AreEqual(expectedDayDescription, resultDescripition);

        }

    }
}
