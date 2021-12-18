using AutoFixture;
using NUnit.Framework;
using System.Collections.Generic;
using ReadingsBuilder.Model.Data;
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

		[TestCase("", null)]
		[TestCase("M", Weekday.Monday)]
		[TestCase("T", Weekday.Tuesday)]
		[TestCase("W", Weekday.Wednesday)]
		[TestCase("Th", Weekday.Thursday)]
		[TestCase("F", Weekday.Friday)]
		[TestCase("S", Weekday.Saturday)]
		[TestCase("Su", Weekday.Sunday)]
		[TestCase("whaaaat", Weekday.Unknown)]
		public void MapsDayOfWeekWeekdayCorrectly(string columnValue, Weekday? expectedResult)
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
			Assert.AreEqual(expectedOldTestament1, result?.FirstOrDefault()?.RotatingOldTestament1);
			Assert.AreEqual(expectedOldTestament2a, result?.FirstOrDefault()?.RotatingOldTestament2a);
			Assert.AreEqual(expectedOldTestament2b, result?.FirstOrDefault()?.RotatingOldTestament2b);
			Assert.AreEqual(expectedNewTestament1, result?.FirstOrDefault()?.RotatingNewTestament1);
			Assert.AreEqual(expectedNewTestament2, result?.FirstOrDefault()?.RotatingNewTestament2);

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