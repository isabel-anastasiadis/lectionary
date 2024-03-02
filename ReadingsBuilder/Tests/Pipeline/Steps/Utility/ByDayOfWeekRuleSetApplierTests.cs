
using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps;
using ReadingsBuilder.Pipeline.Steps.Utility;

#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8625 

namespace Tests.Pipeline.Steps.Utility
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
                ClassUnderTest().ApplyRulesByDayOfWeek(
                    null,
                    Mock.Of<LiturgicalYear>(),
                    new List<Rule>(),
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
                ClassUnderTest().ApplyRulesByDayOfWeek(
                    new PipelineWorkingResult(),
                    Mock.Of<LiturgicalYear>(),
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
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Monday
                }
            };

            var dayTheRuleStarts = new DateOnly(2022, 3, 27);

            var workingResult = new PipelineWorkingResult() {
                Input = new Input() {
                    StartDate = new DateOnly(2022, 1, 1),
                    EndDate = dayTheRuleStarts.AddDays(-1)
                }
            };

            var liturgicalYear = Mock.Of<LiturgicalYear>();
            new Step00PopulateDates().RunStep(workingResult, liturgicalYear: liturgicalYear);

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, dayTheRuleStarts, null, null);

            // assert
            Assert.IsFalse(workingResult.Result.ContainsKey(dayTheRuleStarts));
        }

        [Test]
        public void CheckRulesCanLoopAroundCorrectly()
        {
            // arrange
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Monday,
                    MorningPsalmsMain = "1",
                    EveningPsalmsMain = "2"
                },
                new Rule(){
                    Weekday = DayOfWeek.Tuesday,
                    MorningPsalmsMain = "3",
                    EveningPsalmsMain = "4"
                },
                new Rule(){
                    Weekday = DayOfWeek.Wednesday,
                    MorningPsalmsMain = "5",
                    EveningPsalmsMain = "6"
                },
                new Rule(){
                    Weekday = DayOfWeek.Thursday,
                    MorningPsalmsMain = "7",
                    EveningPsalmsMain = "18"
                },
                new Rule(){
                    Weekday = DayOfWeek.Friday,
                    MorningPsalmsMain = "9",
                    EveningPsalmsMain = "10"
                },
                new Rule(){
                    Weekday = DayOfWeek.Saturday,
                    MorningPsalmsMain = "11",
                    EveningPsalmsMain = "12"
                },
                new Rule(){
                    Weekday = DayOfWeek.Sunday
                },
            };

            var startDate = new DateOnly(2022, 5, 9); // Mon
            var endDate = new DateOnly(2022, 5, 16); // Next Mon

            var workingResult = new PipelineWorkingResult()
            {
                Input = new Input()
                {
                    StartDate = startDate,
                    EndDate = endDate
                }
            };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            new Step00PopulateDates().RunStep(workingResult, liturgicalYear: liturgicalYear);
            var lastDay = workingResult.Result[endDate]?.OptionOne;

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult,
                liturgicalYear,
                applicableRules, 
                workingResult.Input.StartDate, 
                null, 
                null,
                rulesLoopAround: true);

            // assert
            _ruleApplierMock.Verify(m => m
                .ApplyRuleToDay(applicableRules[0], lastDay, liturgicalYear, ApplyToOption.WholeDay)
            );

        }

        [Test]
        public void IfRulesToStartWithIsNotProvidedThenTheFirstRuleIsAppliedToTheFirstDay() 
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = 
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, resultDay.Date, null, null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules.First(), resultDay, liturgicalYear, ApplyToOption.WholeDay));
        }

        [Test]
        public void IfRulesToStartWithIsProvidedThenItIsTheOneAppliedToTheFirstDay() 
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Tuesday
                },
                new Rule(){
                    Weekday = DayOfWeek.Wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, resultDay.Date, applicableRules[1], null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[1], resultDay, liturgicalYear, ApplyToOption.WholeDay));
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

            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Wednesday
                },
                new Rule(){
                    Weekday = DayOfWeek.Thursday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = day1 };
            workingResult.Result[new DateOnly(2021, 12, 2)] =
                new Option<Day, DayOptionType>() { OptionOne = day2 };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, day1.Date, applicableRules[0], null);

            // assert
            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[0], day1, liturgicalYear, ApplyToOption.WholeDay));

            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules[1], day2, liturgicalYear, ApplyToOption.WholeDay));
        }

        [Test]
        public void ThrowsErrorIfTheWeekdayDoesNotMatch()
        {
            // arrange
            var resultDay = new Day
            {
                Date = new DateOnly(2021, 12, 1)
            };
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Weekday = DayOfWeek.Tuesday // should be wednesday
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] =
                new Option<Day, DayOptionType>() { OptionOne = resultDay };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            try
            {
                ClassUnderTest().ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, resultDay.Date, null, null);
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