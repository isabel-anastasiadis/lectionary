using System;
using System.Collections.Generic;
using Moq;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8625

namespace Tests.Model.Pipeline.Steps.Utility
{

    public class RuleApplierTests
    {

        private Mock<IRotatingReadingMappingProvider>? rotatingReadingMappingProviderMock;

        private RuleApplier ClassUnderTest(RotatingReadingMapping? rotatingReadingMapping = null)
        {
            RotatingReadingMapping mappingToUse = rotatingReadingMapping
                ?? new Mock<RotatingReadingMapping>().Object;

            rotatingReadingMappingProviderMock = new Mock<IRotatingReadingMappingProvider>();

            rotatingReadingMappingProviderMock
                .Setup(m => m.GetApplicableMapping(It.IsAny<DateOnly>()))
                .Returns(mappingToUse);

            return new RuleApplier(rotatingReadingMappingProviderMock.Object);
        }

        [Test]
        public void InitialisesEveningOptionTwoForEveningBeforeFestivalOptionType() {
            // arrange
            var day = new Day();
            var ruleData = new RuleData();

            // act
            ClassUnderTest().ApplyRuleToDay(ruleData, day, ReadingsOptionType.EveningBeforeFestival);

            // assert
            Assert.NotNull(day.EveningReadings.OptionTwo);
            Assert.AreEqual(ReadingsOptionType.EveningBeforeFestival, day.EveningReadings.OptionTwoType);
        }

        [Test]
        public void DescriptionIsSetForEveningBeforeFestivalOptionType()
        {
            // arrange
            var expected = "1st EP of St Mark";

            var day = new Day();
            var ruleData = new RuleData()
            { 
                EveningName = expected
            };

            // act
            ClassUnderTest().ApplyRuleToDay(ruleData, day, ReadingsOptionType.EveningBeforeFestival);

            // assert
            Assert.AreEqual(expected, day.EveningReadings.OptionTwoDescription);
        }

        /// <summary>
        /// This test is eventually what we want to happen. We want EveningBeforeFestival 
        /// readings to be option two, not overriding option one.
        /// 
        /// But I haven't done this yet, so it is failing.
        /// </summary>
        [Ignore("future desired behaviour, not implemented yet")]
        [Test]
        public void OptionOneReadingsAreNotOverriddenByEveningBeforeFestivalOptionType()
        {
            // arrange

            var originalPsalm = "Psalm 1";
            var originalOldTestament = "Job 1:1-3";
            var originalNewTestament = "Mark 1:1-7";

            var option2Psalm = "5";
            var option2OldTestament = "Genesis 3:1-5";
            var option2NewTestament = "John 3:16";

            var day = new Day();
            day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = originalPsalm;
            day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = originalOldTestament;
            day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = originalNewTestament;

            var ruleData = new RuleData()
            {
                EveningPsalmsMain = option2Psalm,
                EveningOldTestament = option2OldTestament,
                EveningNewTestament = option2NewTestament
            };

            // act
            ClassUnderTest().ApplyRuleToDay(ruleData, day, ReadingsOptionType.EveningBeforeFestival);

            // assert
            Assert.AreEqual(originalPsalm, day.EveningReadings.OptionOne.Psalms.OptionOne.RawString);
            Assert.AreEqual(originalOldTestament, day.EveningReadings.OptionOne.Psalms.OptionOne.RawString);
            Assert.AreEqual(originalNewTestament, day.EveningReadings.OptionOne.Psalms.OptionOne.RawString);
        }


        [TestCase("6", null, "Psalm 6", Description = "Happy path")]
        [TestCase(null, "Psalm 6", "Psalm 6", Description = "Preexisting day value not overridden")]
        [TestCase("8", "Psalm 6", "Psalm 8", Description = "Rule value trumps preexisting day value")]
        public void AppliesMorningPsalmsCorrectly(string? ruleValue, string? dayValue, string? expectedValue)
        {
            // arrange
            var day = new Day()
            {
            };

            day.MorningReadings.OptionOne.Psalms.OptionOne.RawString = dayValue;


            var ruleData = new RuleData()
            {
                MorningPsalmsMain = ruleValue,
            };


            // act
            ClassUnderTest().ApplyPsalms(ruleData, day, default);

            // assert
            Assert.AreEqual(expectedValue, day.MorningReadings.OptionOne.Psalms.OptionOne.RawString);

        }

        [TestCase("6", null, "Psalm 6", Description = "Happy path")]
        [TestCase(null, "Psalm 6", "Psalm 6", Description = "Preexisting day value not overridden")]
        [TestCase("8", "Psalm 6", "Psalm 8", Description = "Rule value trumps preexisting day value")]
        public void AppliesEveningPsalmsCorrectly(string? ruleValue, string? dayValue, string? expectedValue)
        {
            // arrange
            var day = new Day()
            {
            };
            day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = dayValue;

            var ruleData = new RuleData()
            {
                EveningPsalmsMain = ruleValue,
            };


            // act
            ClassUnderTest().ApplyPsalms(ruleData, day, default);

            // assert
            Assert.AreEqual(expectedValue, day.EveningReadings.OptionOne.Psalms.OptionOne.RawString);

        }

        [TestCase("Christmas day", null, "Christmas day", Description = "Happy path")]
        [TestCase("Christmas eve", "Week of 4th Sunday in Advent", "Christmas eve", Description = "Rule value trumps preexisting value")]
        [TestCase(null, "Christmas day", "Christmas day", Description = "Preexisting value is not overridden by the rule not having a value")]
        public void AppliesDayDescriptionCorrectly(string? ruleValue, string? dayPreexistingValue, string? expectedValue)
        {
            // arrange

            var day = new Day()
            {
                DayDescription = dayPreexistingValue,
            };

            var ruleData = new RuleData()
            {
                DayName = ruleValue
            };


            // act
            ClassUnderTest().ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expectedValue, day.DayDescription);
        }

        [TestCase(true, null, true, Description = "Happy path")]
        [TestCase(true, false, true, Description = "Rule value trumps preexisting value")]
        [TestCase(null, true, true, Description = "Preexisting value is not overridden by the rule not having a value")]
        public void AppliesIsSeasonalTimeCorrectly(bool? ruleValue, bool? dayPreexistingValue, bool? expectedValue)
        {
            // arrange

            var day = new Day()
            {
                IsSeasonalTime = dayPreexistingValue,
            };

            var ruleData = new RuleData()
            {
                IsSeasonalTime = ruleValue
            };


            // act
            ClassUnderTest().ApplyIsSeasonalTime(ruleData, day);

            // assert
            Assert.AreEqual(expectedValue, day.IsSeasonalTime);
        }

        [TestCase(FeastOrSeasonType.None, FeastOrSeasonType.None, FeastOrSeasonType.None, Description = "Happy path")]
        [TestCase(FeastOrSeasonType.Lent, FeastOrSeasonType.None, FeastOrSeasonType.Lent, Description = "Rule value trumps preexisting value")]
        [TestCase(FeastOrSeasonType.None, FeastOrSeasonType.Advent, FeastOrSeasonType.Advent, Description = "Preexisting value is not overridden by the rule not having a value")]
        [TestCase(FeastOrSeasonType.Lent, FeastOrSeasonType.Advent, FeastOrSeasonType.Advent | FeastOrSeasonType.Lent, Description = "New rule values are added to existing ones")]
        public void AppliesFeastOrSeasonTypeCorrectly(FeastOrSeasonType ruleValue, FeastOrSeasonType dayPreexistingValue, FeastOrSeasonType expectedValue)
        {
            // arrange

            var day = new Day()
            {
                FeastOrSeasonType = dayPreexistingValue,
            };

            var ruleData = new RuleData()
            {
                FeastOrSeasonFlags = ruleValue
            };


            // act
            ClassUnderTest().ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expectedValue, day.FeastOrSeasonType);
        }


        [Test]
        public void AppliesRotatingNewTestamentReadingsCorrectly()
        {

            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var ruleData = new RuleData()
            {
                RotatingReadings = new Dictionary<RotatingReadingType, string?> {
                    { RotatingReadingType.OldTestament1, "Job 2:1-2;"},
                    { RotatingReadingType.OldTestament2a, "Isaiah 20:1-5;"},
                    { RotatingReadingType.OldTestament2b, "Exodus 2:2-5;"},
                    { RotatingReadingType.NewTestament1, "Matthew 3:12-15"},
                    { RotatingReadingType.NewTestament2, "Mark 2:1-4;"},
                }
            };

            var day = new Day()
            {
                IsSeasonalTime = true, // any value
            };

            // act
            ClassUnderTest().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

            // assert
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.NewTestament1], day?.MorningReadings?.OptionOne?.NewTestament?.OptionOne?.RawString);
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.NewTestament2], day?.EveningReadings?.OptionOne?.NewTestament?.OptionOne?.RawString);
        }

        [Test]
        public void AppliesOldTestamentReadingsInSeasonalTimeCorrectly()
        {

            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var ruleData = new RuleData()
            {
                RotatingReadings = new Dictionary<RotatingReadingType, string?> {
                    { RotatingReadingType.OldTestament1, "Job 2:1-2;"},
                    { RotatingReadingType.OldTestament2a, "Isaiah 20:1-5;"},
                    { RotatingReadingType.OldTestament2b, "Exodus 2:2-5;"},
                    { RotatingReadingType.NewTestament1, "Matthew 3:12-15"},
                    { RotatingReadingType.NewTestament2, "Mark 2:1-4;"},
                }
            };

            var day = new Day()
            {
                IsSeasonalTime = true
            };

            // act
            ClassUnderTest().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

            // assert
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament2a], day?.MorningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament1], day?.EveningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
        }

        [Test]
        public void AppliesOldTestamentReadingsInOrdinaryTimeCorrectly()
        {

            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var ruleData = new RuleData()
            {
                RotatingReadings = new Dictionary<RotatingReadingType, string?> {
                    { RotatingReadingType.OldTestament1, "Job 2:1-2;"},
                    { RotatingReadingType.OldTestament2a, "Isaiah 20:1-5;"},
                    { RotatingReadingType.OldTestament2b, "Exodus 2:2-5;"},
                    { RotatingReadingType.NewTestament1, "Matthew 3:12-15"},
                    { RotatingReadingType.NewTestament2, "Mark 2:1-4;"},
                }
            };

            var day = new Day()
            {
                IsSeasonalTime = false
            };

            // act
            ClassUnderTest().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

            // assert
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament2b], day?.MorningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament1], day?.EveningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
        }

        [TestCase("Job 2:3-4", null, "Job 2:3-4", Description = "Happy path")]
        [TestCase(null, "Existing reading", "Existing reading", Description = "Existing day value not overwritten by null rule value")]
        [TestCase("Job 2:3-4", "Existing reading", "Job 2:3-4", Description = "Rule value should overwrite the existing day value")]
        public void AppliesMorningOldTestamentSetReadingsCorrectly(string? ruleValue, string? existingDayValue, string? expected)
        {
            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var day = new Day()
            {
            };
            day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = existingDayValue;

            var ruleData = new RuleData()
            {
                MorningOldTestament = ruleValue,
            };


            // act
            ClassUnderTest(rotatingReadingMapping).ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expected, day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString);
        }

        [TestCase("Job 2:3-4", null, "Job 2:3-4", Description = "Happy path")]
        [TestCase(null, "Existing reading", "Existing reading", Description = "Existing day value not overwritten by null rule value")]
        [TestCase("Job 2:3-4", "Existing reading", "Job 2:3-4", Description = "Rule value should overwrite the existing day value")]
        public void AppliesMorningNewTestamentSetReadingsCorrectly(string? ruleValue, string? existingDayValue, string? expected)
        {
            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var day = new Day()
            {
            };
            day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = existingDayValue;

            var ruleData = new RuleData()
            {
                MorningNewTestament = ruleValue,
            };


            // act
            ClassUnderTest(rotatingReadingMapping).ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expected, day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString);
        }

        [TestCase("Job 2:3-4", null, "Job 2:3-4", Description = "Happy path")]
        [TestCase(null, "Existing reading", "Existing reading", Description = "Existing day value not overwritten by null rule value")]
        [TestCase("Job 2:3-4", "Existing reading", "Job 2:3-4", Description = "Rule value should overwrite the existing day value")]
        public void AppliesEveningOldTestamentSetReadingsCorrectly(string? ruleValue, string? existingDayValue, string? expected)
        {
            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var day = new Day()
            {
            };
            day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = existingDayValue;

            var ruleData = new RuleData()
            {
                EveningOldTestament = ruleValue,
            };


            // act
            ClassUnderTest(rotatingReadingMapping).ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expected, day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString);
        }

        [TestCase("Job 2:3-4", null, "Job 2:3-4", Description = "Happy path")]
        [TestCase(null, "Existing reading", "Existing reading", Description = "Existing day value not overwritten by null rule value")]
        [TestCase("Job 2:3-4", "Existing reading", "Job 2:3-4", Description = "Rule value should overwrite the existing day value")]
        public void AppliesEveningNewTestamentSetReadingsCorrectly(string? ruleValue, string? existingDayValue, string? expected)
        {
            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var day = new Day()
            {
            };
            day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = existingDayValue;

            var ruleData = new RuleData()
            {
                EveningNewTestament = ruleValue,
            };


            // act
            ClassUnderTest(rotatingReadingMapping).ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expected, day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString);
        }

        [Test]
        public void SetReadingsOverrideRotatingReadingsWhenBothAreProvided()
        {
            // arrange
            var expectedMorningOldTestament = "Job 2:3-4";
            var expectedMorningNewTestament = "Mark 4:2-6";
            var expectedEveningOldTestament = "Exodus 12:23-27";
            var expectedEveningNewTestament = "John 3:16-19";

            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                MorningNewTestament = RotatingReadingType.NewTestament1,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1
            };

            var day = new Day();

            var ruleData = new RuleData()
            {
                IsSeasonalTime = true,
                MorningOldTestament = expectedMorningOldTestament,
                MorningNewTestament = expectedMorningNewTestament,
                EveningOldTestament = expectedEveningOldTestament,
                EveningNewTestament = expectedEveningNewTestament,
                RotatingReadings = new Dictionary<RotatingReadingType, string?>()
                {
                    { RotatingReadingType.OldTestament1, "Rotating reading" },
                    { RotatingReadingType.OldTestament2a, "Rotating reading" },
                    { RotatingReadingType.OldTestament2b, "Rotating reading" },
                    { RotatingReadingType.NewTestament1, "Rotating reading" },
                    { RotatingReadingType.NewTestament2, "Rotating reading" }
                }
            };


            // act
            ClassUnderTest(rotatingReadingMapping).ApplyRuleToDay(ruleData, day);

            // assert
            Assert.AreEqual(expectedMorningOldTestament, day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString);
            Assert.AreEqual(expectedMorningNewTestament, day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString);
            Assert.AreEqual(expectedEveningOldTestament, day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString);
            Assert.AreEqual(expectedEveningNewTestament, day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString);
        }
    }
}

#pragma warning restore CS8602 // Dereference of a possibly null reference.
#pragma warning restore CS8625