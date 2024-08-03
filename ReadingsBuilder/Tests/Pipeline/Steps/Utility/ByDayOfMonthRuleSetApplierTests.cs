
using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace Tests.Pipeline.Steps.Utility
{
#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8625 // Cannot convert null literal to non-nullable reference type.
    public class ByDayOfMonthRuleSetApplierTests
    {
        private Mock<IRuleApplier>? _ruleApplierMock;
        private Mock<ITransferCalculator>? _transferCalculator;

        private ByDayOfMonthRuleSetApplier ClassUnderTest()
        {
            _ruleApplierMock = new Mock<IRuleApplier>();
            _transferCalculator = new Mock<ITransferCalculator>();

            return new ByDayOfMonthRuleSetApplier(_ruleApplierMock.Object, _transferCalculator.Object);
        }

        [Test]
        public void ChecksForNullWorkingResult()
        {

            // act & assert
            try
            {

                ClassUnderTest().ApplyRulesByDayOfMonth(null, Mock.Of<LiturgicalYear>(),new List<Rule>());
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
                ClassUnderTest().ApplyRulesByDayOfMonth(new PipelineWorkingResult(), Mock.Of<LiturgicalYear>(), null);
                Assert.Fail();
            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }
        }

        /// <summary>
        /// There is a heirarchy of steps to be applied within a year. 
        /// Sometimes we get two matching dates, but we shouldn't get 3
        [Test]
        public void DoesNotThrowExceptionIfARuleCouldApplyToTwoDatesInTheResult()
        {
            // arrange
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();
            var liturgicalYear = Mock.Of<LiturgicalYear>();
            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>();
            workingResult.Result[new DateOnly(2022, 12, 1)] = new Option<Day, DayOptionType>();

            // act
            ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, liturgicalYear, applicableRules);

            // assert
            Assert.Pass();

        }

        /// <summary>
        /// There is a heirarchy of steps to be applied within a year. 
        /// Sometimes we get two matching dates, but we shouldn't get 3
        [Test]
        public void ThrowsExceptionIfARuleCouldApplyToThreeOrMoreDatesInTheResult()
        {
            // arrange
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>();
            workingResult.Result[new DateOnly(2022, 12, 1)] = new Option<Day, DayOptionType>();
            workingResult.Result[new DateOnly(2023, 12, 1)] = new Option<Day, DayOptionType>();

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            try
            {
                ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, liturgicalYear, applicableRules);
                Assert.Fail();
            }
            catch (ArgumentException)
            {
                Assert.Pass();
            }

        }

        [Test]
        public void TheRuleIsJustSkippedIfTheResultDoesNotContainAMatchingDate()
        {
            // arrange
            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, liturgicalYear, applicableRules);

            // assert
            Assert.IsEmpty(workingResult.Result.Keys);
        }

        [Test]
        public void RulesAreAppliedCorrectlyHappyPath()
        {
            // arrange
            var resultDay = new Day();

            var applicableRules = new List<Rule>
            {
                new Rule(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>() { OptionOne = resultDay };

            var liturgicalYear = Mock.Of<LiturgicalYear>();

            // act
            ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, liturgicalYear, applicableRules);

            // assert

            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules.First(), resultDay, liturgicalYear), times: Times.Once);


        }

    }
#pragma warning restore CS8602 // Dereference of a possibly null reference.
#pragma warning restore CS8625 // Cannot convert null literal to non-nullable reference type.
}
