using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps;
using ReadingsBuilder.Pipeline.Steps.Utility;

#pragma warning disable CS8625 
#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace Tests.Pipeline.Steps
{
    public class Step01AdventToEpiphanyTests
    {

        private const string ClassName = "BaseAdvent.cs";

        private List<Rule> _defaultRules = new List<Rule>() {
            new Rule(){
                    RowNumberInRuleSet = 0,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "First Sunday of advent",
                    Weekday = DayOfWeek.Sunday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Monday in first week of advent",
                    Weekday = DayOfWeek.Monday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Tuesday in first week of advent",
                    Weekday = DayOfWeek.Tuesday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Wednesday in first week of advent",
                    Weekday = DayOfWeek.Wednesday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Thursday in first week of advent",
                    Weekday = DayOfWeek.Thursday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Friday in first week of advent",
                    Weekday = DayOfWeek.Friday
            },
            new Rule(){
                    RowNumberInRuleSet = 1,
                    HandlingClassName = ClassName,
                    RuleType = RuleType.ByDayOfWeek,
                    DayName = "Saturday in first week of advent",
                    Weekday = DayOfWeek.Saturday
            },
        };

        private Mock<IByDayOfWeekRuleSetApplier>? _ruleSetApplierMock;


        private Step01BaseAdvent ClassUnderTest(List<Rule>? rules = null)
        {
            var allData = rules ?? _defaultRules;

            var dataFactoryMock = new Mock<IRulesFactory>();
            dataFactoryMock.Setup(m => m.GenerateAllData(null)).Returns(allData);


            return new Step01BaseAdvent(new RuleApplier(), dataFactoryMock.Object, _ruleSetApplierMock.Object);

        }


        [SetUp]
        public void SetUpMocks()
        {
            _ruleSetApplierMock = new Mock<IByDayOfWeekRuleSetApplier>();
        }

        [Test]
        public void ChecksConstructorParamForNullRules()
        {

            // arrange

            // act & assert
            try
            {

                new Step01BaseAdvent(Mock.Of<IRuleApplier>(), null, Mock.Of<IByDayOfWeekRuleSetApplier>());

                Assert.Fail("Should have thrown ArgumentNullException");

            }
            catch (ArgumentNullException)
            {
                Assert.Pass();
            }
        }

        [TestCase(ClassName, RuleType.ByDayOfWeek, true)]
        [TestCase("SomeOtherClass.cs", RuleType.ByDayOfWeek, false)]
        public void ApplicableRulesRequiresAtLeastOneMatchingRule(string handlingClassName, RuleType ruleType, bool shouldPass)
        {

            // arrange

            // act & assert
            try
            {
                ClassUnderTest(new List<Rule>() {
                    new Rule(){
                        HandlingClassName = handlingClassName,
                        RuleType = ruleType
                    }
                }).ApplicableRules(RclYear.B);

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
        public void RunStepEnsuresTheYearStartsWithSunday()
        {

            // arrange
            var workingResult = new PipelineWorkingResult();

            workingResult.Result[new DateOnly(2021, 12, 1)] = new Option<Day, DayOptionType>() // Wed
            {
                OptionOne = new Day()
            };
            var liturgicalYear = Mock.Of<LiturgicalYear>();

            var classUnderTest = ClassUnderTest();

            // act & assert
            try
            {
                classUnderTest.RunStep(workingResult, liturgicalYear: liturgicalYear);
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
            var dateOfDay = new DateOnly(2021, 11, 28); // 1st Sun Advent
            var workingResult = new PipelineWorkingResult();
            workingResult.Result[dateOfDay] = new Option<Day, DayOptionType>();
            var liturgicalYear = Mock.Of<LiturgicalYear>();

            var classUnderTest = ClassUnderTest();
            var expectedFirstRule = _defaultRules.First();

            // act
            var result = classUnderTest.RunStep(workingResult, liturgicalYear: liturgicalYear);

            // assert
            _ruleSetApplierMock.Verify(m => m.ApplyRulesByDayOfWeek(workingResult, It.IsAny<LiturgicalYear>(), It.IsAny<List<Rule>>(), dateOfDay, expectedFirstRule, null, false));

        }

    }
}
#pragma warning restore CS8602 // Dereference of a possibly null reference.
#pragma warning restore CS8625