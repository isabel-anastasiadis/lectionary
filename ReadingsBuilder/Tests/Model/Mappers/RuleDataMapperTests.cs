using AutoFixture;
using NUnit.Framework;
using System.Collections.Generic;
using ReadingsBuilder.Model;
using System;
using System.Linq;
using ReadingsBuilder.Model.Mappers;

namespace Tests.Model.Mappers
{
	public class RuleDataMapperTests
	{
		[Test]
		public void DoesNotErrorWhenAllColumnsAreEmpty() 
		{
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();

			// act & assert
			new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });
		}

		[Test]
		public void EmptyColumnsMapToNull()
		{
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() }).First();

			// assert
			Assert.IsNull(result.HandlingClassName);
			Assert.IsNull(result.RowNumberInRuleSet);
			Assert.IsNull(result.RuleType);
			Assert.IsNull(result.DayName);
			Assert.IsNull(result.IsSeasonalTime);
			Assert.IsNull(result.Weekday);
			Assert.IsNull(result.Day);
			Assert.IsNull(result.Month);
			Assert.IsNull(result.Weekday);
			// rotating readings in another test
			Assert.IsNull(result.MorningNewTestament);
			Assert.IsNull(result.MorningOldTestament);
			Assert.IsNull(result.EveningNewTestament);
			Assert.IsNull(result.EveningOldTestament);
			Assert.IsNull(result.MorningPsalmsMain);
			Assert.IsNull(result.EveningPsalmsMain);
		}

		[Test]
		public void EmptyColumnsMeanTheHasReadingsChecksReturnFalse()
		{
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() }).First();

			// assert
			Assert.IsFalse(result.HasSetReadings);
			Assert.IsFalse(result.HasRotatingReadings);
			Assert.IsFalse(result.HasSetEveningOverrides);
		}

		[Test]
		public void MapsClassMetadataCorrectly()
		{
			
			// arrange
			var expectedClassName = "SomeCoolClass.cs";
			var expectedRowWithinClass = 2;
			var expectedRuleType = RuleType.ByDayOfMonth;

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.RuleClassName] = expectedClassName;
			input[(int)ColumnIndexes.RowWithinClass] = expectedRowWithinClass.ToString();
			input[(int)ColumnIndexes.RuleType] = expectedRuleType.ToString();


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedClassName, result?.FirstOrDefault()?.HandlingClassName);
			Assert.AreEqual(expectedRowWithinClass, result?.FirstOrDefault()?.RowNumberInRuleSet);
			Assert.AreEqual(expectedRuleType, result?.FirstOrDefault()?.RuleType);

			

		}

		[Test]
		public void MapsDayDescriptionCorrectly()
		{
			
			// arrange
			var expectedDayName = "Christmas";

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.DayName] = expectedDayName;


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedDayName, result?.FirstOrDefault()?.DayName);

		}

		[Test]
		public void MapsEveningDescriptionCorrectly()
		{

			// arrange
			var expectedEveningName = "1st EP of St Mark";

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.EveningName] = expectedEveningName;


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedEveningName, result?.FirstOrDefault()?.EveningName);

		}

		[TestCase("TRUE", true)]
		[TestCase("FALSE", false)]
		[TestCase("", null)]
		public void MapsIsSeasonalTimeCorectly(string rawValue, bool? expectedResult)
		{

			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.IsSeasonalTime] = rawValue;


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedResult, result?.FirstOrDefault()?.IsSeasonalTime);

		}

		[TestCase("", FeastOrSeasonType.None)]
		[TestCase("  ", FeastOrSeasonType.None)]
		[TestCase("Advent", FeastOrSeasonType.Advent)]
		[TestCase("     Advent  ", FeastOrSeasonType.Advent)]
		[TestCase("EasterWeek;Eastertide", FeastOrSeasonType.Eastertide | FeastOrSeasonType.EasterWeek)]
		public void MapsFeastOrSeasonFlagsCorrectly(string rawValue, FeastOrSeasonType expectedFlags)
		{
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.FeastDaySeasonType] = rawValue;
			var rows = new List<List<string>>() { input.ToList<string>() };

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(rows);

			// assert
			Assert.AreEqual(expectedFlags, result?.FirstOrDefault()?.FeastOrSeasonFlags);
		}

		[TestCase("NotAValue")]
		[TestCase("WhatThe;Advent")]
		public void ThrowsArgumentExceptionForStrangeFeastOrSeasonFlagsFormat(string rawValue)
		{
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.FeastDaySeasonType] = rawValue;
			var rows = new List<List<string>>() { input.ToList<string>() };

			// act
			try
			{
				var result = new RuleDataMapper().MapRowsToRuleData(rows);
				Assert.Fail();
			}
			catch (ArgumentException)
			{
				Assert.Pass();
			}
		}


		[TestCase("", null)]
		[TestCase("M", DayOfWeek.Monday)]
		[TestCase("T", DayOfWeek.Tuesday)]
		[TestCase("W", DayOfWeek.Wednesday)]
		[TestCase("Th", DayOfWeek.Thursday)]
		[TestCase("F", DayOfWeek.Friday)]
		[TestCase("S", DayOfWeek.Saturday)]
		[TestCase("Su", DayOfWeek.Sunday)]
		[TestCase("whaaaat", null)]
		public void MapsDayOfWeekWeekdayCorrectly(string columnValue, DayOfWeek? expectedResult)
		{
			
			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.ByDayOfWeekWeekday] = columnValue;


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedResult, result?.FirstOrDefault()?.Weekday);

		}

		[Test]
		public void MapsMonthNumberAndDayNumberCorrectly()
		{
			
			// arrange
			var expectedMonth = 12;
			var expectedDay = 25;

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.ByDayOfMonthMonth] = expectedMonth.ToString();
			input[(int)ColumnIndexes.ByDayOfMonthDay] = expectedDay.ToString();

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedMonth, result?.FirstOrDefault()?.Month);
			Assert.AreEqual(expectedDay, result?.FirstOrDefault()?.Day);

			

		}

		[Test]
		public void MapsRotatingTestamentReadingsCorrectly()
		{

			// arrange
			var expectedOldTestament1 = "Job 2:1-4";
			var expectedOldTestament2a = "Ruth 1:2-5";
			var expectedOldTestament2b = "1 Samuel 3:2-3";
			var expectedNewTestament1 = "John 3:16-20";
			var expectedNewTestament2 = "1 John 2:1-2";

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.RotatingOldTestament1] = expectedOldTestament1;
			input[(int)ColumnIndexes.RotatingOldTestament2a] = expectedOldTestament2a;
			input[(int)ColumnIndexes.RotatingOldTestament2b] = expectedOldTestament2b;
			input[(int)ColumnIndexes.RotatingNewTestament1] = expectedNewTestament1;
			input[(int)ColumnIndexes.RotatingNewTestament2] = expectedNewTestament2;


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedOldTestament1, result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament1]);
			Assert.AreEqual(expectedOldTestament2a, result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament2a]);
			Assert.AreEqual(expectedOldTestament2b, result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament2b]);
			Assert.AreEqual(expectedNewTestament1, result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.NewTestament1]);
			Assert.AreEqual(expectedNewTestament2, result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.NewTestament2]);
		}

		[Test]
		public void EmptyValuesResultInNullRotatingReadings()
		{

			// arrange
			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();


			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.IsNull(result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament1]);
			Assert.IsNull(result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament2a]);
			Assert.IsNull(result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.OldTestament2b]);
			Assert.IsNull(result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.NewTestament1]);
			Assert.IsNull(result?.FirstOrDefault()?.RotatingReadings[RotatingReadingType.NewTestament2]);
		}

		[Test]
		public void MapsMorningAndEveningTestamentReadingsCorrectly()
		{

			// arrange
			var expectedMorningOldTestament = "Job 2:1-4";
			var expectedMorningNewTestament = "John 3:16-20";
			var expectedEveningOldTestamnet = "Ruth 1:2-5";
			var expectedEveningNewTestament = "1 John 2:1-2";

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.MorningOldTestament] = expectedMorningOldTestament;
			input[(int)ColumnIndexes.MorningNewTestament] = expectedMorningNewTestament;
			input[(int)ColumnIndexes.EveningOldTestament] = expectedEveningOldTestamnet;
			input[(int)ColumnIndexes.EveningNewTestament] = expectedEveningNewTestament;

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(expectedMorningOldTestament, result?.FirstOrDefault()?.MorningOldTestament);
			Assert.AreEqual(expectedMorningNewTestament, result?.FirstOrDefault()?.MorningNewTestament);
			Assert.AreEqual(expectedEveningOldTestamnet, result?.FirstOrDefault()?.EveningOldTestament);
			Assert.AreEqual(expectedEveningNewTestament, result?.FirstOrDefault()?.EveningNewTestament);

		}

		[Test]
		public void MapsPsalmsCorrectly()
		{

			// arrange
			var morningPsalmsMain = "24";
			var eveningPsalmsMain = "119:1-26,23";

			var numberOfColumns = Enum.GetNames(typeof(ColumnIndexes)).Length;
			var input = Enumerable.Repeat("", numberOfColumns).ToArray();
			input[(int)ColumnIndexes.MorningPsalmMain] = morningPsalmsMain;
			input[(int)ColumnIndexes.EveningPsalmMain] = eveningPsalmsMain;

			// act
			var result = new RuleDataMapper().MapRowsToRuleData(new List<List<string>>() { input.ToList<string>() });

			// assert
			Assert.AreEqual(morningPsalmsMain, result?.FirstOrDefault()?.MorningPsalmsMain);
			Assert.AreEqual(eveningPsalmsMain, result?.FirstOrDefault()?.EveningPsalmsMain);

		}

	}
}