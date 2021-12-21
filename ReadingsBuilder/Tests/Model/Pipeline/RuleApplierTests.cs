using System;
using System.Collections.Generic;
using NUnit.Framework;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Pipeline;

namespace Tests.Model.Pipeline
{
    public class RuleApplierTests
    {
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
            new RuleApplier().ApplyPsalms(ruleData, day);

            // assert
            Assert.AreEqual(expectedValue, day.MorningReadings.OptionOne.Psalms.OptionOne.RawString);

        }

        [TestCase("6", null, "Psalm 6", Description = "Happy path")]
        [TestCase(null, "Psalm 6" , "Psalm 6", Description = "Preexisting day value not overridden")]
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
            new RuleApplier().ApplyPsalms(ruleData, day);

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
            new RuleApplier().ApplyRuleToDay(null, ruleData, day);

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
            new RuleApplier().ApplyIsSeasonalTime(ruleData, day);

            // assert
            Assert.AreEqual(expectedValue, day.IsSeasonalTime);
        }


        [Test]
        public void AppliesRotatingNewTestamentReadingsCorrectly() {

            // arrange
            var rotatingReadingMapping = new RotatingReadingMapping()
            {
                Year = 2021,
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
            new RuleApplier().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

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
                Year = 2021,
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
            new RuleApplier().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

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
                Year = 2021,
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
            new RuleApplier().ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

            // assert
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament2b], day?.MorningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
            Assert.AreEqual(ruleData.RotatingReadings[RotatingReadingType.OldTestament1], day?.EveningReadings?.OptionOne?.OldTestament?.OptionOne?.RawString);
        }
    }
}
