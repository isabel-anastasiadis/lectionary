
using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace Tests.Model.Pipeline.Steps.Utility
{
#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8625 // Cannot convert null literal to non-nullable reference type.
    public class ByDayOfMonthRuleSetApplierTests
    {
        private Mock<IRuleApplier>? _ruleApplierMock;

        private ByDayOfMonthRuleSetApplier ClassUnderTest()
        {
            _ruleApplierMock = new Mock<IRuleApplier>();

            return new ByDayOfMonthRuleSetApplier(_ruleApplierMock.Object);
        }

        [Test]
        public void ChecksForNullWorkingResult()
        {

            // act & assert
            try
            {

                ClassUnderTest().ApplyRulesByDayOfMonth(null, new List<RuleData>());
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
                ClassUnderTest().ApplyRulesByDayOfMonth(new PipelineWorkingResult(), null);
                Assert.Fail();
            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }
        }

        /// <summary>
        /// There is a heirarchy of steps to be applied within a year. 
        /// If we've got multiple matching ones, then we've got more than a years data.
        /// This could mess up the heirarchy.
        /// </summary>
        [Test]
        public void ThrowsExceptionIfARuleCouldApplyToMoreThanOneDateInTheResult()
        {
            // arrange
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>();
            workingResult.Result[new DateOnly(2022, 12, 1)] = new Option<Day, DayOptionType>();

            // act
            try
            {
                ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, applicableRules);
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
            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();

            // act
            ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, applicableRules);

            // assert
            Assert.IsEmpty(workingResult.Result.Keys);
        }

        [Test]
        public void RulesAreAppliedCorrectlyHappyPath()
        {
            // arrange
            var resultDay = new Day();

            var applicableRules = new List<RuleData>
            {
                new RuleData(){
                    Day = 1,
                    Month = 12
                }
            };

            var workingResult = new PipelineWorkingResult();
            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>() { OptionOne = resultDay };

            // act
            ClassUnderTest().ApplyRulesByDayOfMonth(workingResult, applicableRules);

            // assert

            _ruleApplierMock.Verify(m => m.ApplyRuleToDay(applicableRules.First(), resultDay), times: Times.Once);


        }

    }
#pragma warning restore CS8602 // Dereference of a possibly null reference.
#pragma warning restore CS8625 // Cannot convert null literal to non-nullable reference type.
}
