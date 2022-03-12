
using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8625 

namespace Tests.Model.Pipeline.Steps.Utility
{
    public class ByDayOfWeekRuleSetApplierTests
    {
        private Mock<IRuleApplier>? _ruleApplierMock;

        private ByDayOfWeekRuleSetApplier ClassUnderTest()
        {
            _ruleApplierMock = new Mock<IRuleApplier>();

            return new ByDayOfWeekRuleSetApplier(_ruleApplierMock.Object);
        }

        [Test]
        public void ChecksForNullWorkingResult()
        {

            // act & assert
            try
            {
                ClassUnderTest().ApplyRulesByDayOfWeek(null, 
                    new List<RuleData>(), 
                    default, 
                    null,
                    null);
                Assert.Fail();
            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }

        }

        [Test]
        public void ChecksForNullApplicableRules()
        {

            // act & assert
            try
            {
                ClassUnderTest().ApplyRulesByDayOfWeek(new PipelineWorkingResult(), 
                    null, 
                    default, 
                    null,
                    null);
                Assert.Fail();
            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }

        }

        [Test]
        public void IfThereAreNoApplicableDaysInTheResultThenSkip() 
        {
            // arrange
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Weekday = DayOfWeek.Monday
                }
            };

            var workingResult = new PipelineWorkingResult();

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, applicableRules, default, null, null);

            // assert
            Assert.IsEmpty(workingResult.Result.Keys);

        }

        [Test]
        public void IfRuleDataToStartWithIsNotProvidedThenTheFirstRuleIsAppliedToTheFirstDay() 
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Weekday = DayOfWeek.Wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = 
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, applicableRules, resultDay.Date, null, null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules.First(), resultDay, default));
        }

        [Test]
        public void IfRuleDataToStartWithIsProvidedThenItIsTheOneAppliedToTheFirstDay() 
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Weekday = DayOfWeek.Tuesday
                },
                new RuleData(){
                    Weekday = DayOfWeek.Wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, applicableRules, resultDay.Date, applicableRules[1], null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[1], resultDay, default));
        }

        [Test]
        public void ConsecutiveRulesAreAppliedToConsecutiveDays() 
        {
            // arrange
            var day1 = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var day2 = new Day
            {
                Date = new DateOnly(2021, 12, 2)
            };

            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Weekday = DayOfWeek.Wednesday
                },
                new RuleData(){
                    Weekday = DayOfWeek.Thursday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = day1 };
            workingResult.Result[new DateOnly(2021, 12, 2)] =
                new Option<Day, DayOptionType>() { OptionOne = day2 };

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, applicableRules, day1.Date, applicableRules[0], null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[0], day1, default));

            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[1], day2, default));
        }

        [Test]
        public void ThrowsErrorIfTheWeekdayDoesNotMatch()
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Weekday = DayOfWeek.Tuesday // should be wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            // act
            try
            {
                ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, applicableRules, resultDay.Date, null, null);
                Assert.Fail();
            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }

        }


    }
}
#pragma warning restore CS8602 // Dereference of a possibly null reference.
#pragma warning restore CS8625