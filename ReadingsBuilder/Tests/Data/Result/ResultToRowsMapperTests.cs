﻿using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;

namespace Tests.Data.Result
{
    public class ResultToRowsMapperTests
    {

        [Test]
        public void AddsHeadingRowCorrectly()
        {

            // arrange
            var expectedHeadingRow = new List<string>
            {
                "date",
                "date_pretty",
                "day_description",
                "evening_name",
                "rcl_track_1_short_name_override",
                "rcl_track_1_full_name_override",
                "rcl_track_1_note",
                "rcl_track_1",
                "rcl_track_2_short_name_override",
                "rcl_track_2_full_name_override",
                "rcl_track_2_note",
                "rcl_track_2",
                "morning_prayers_together",
                "evening_prayers_together"
            };

            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>();

            // act
            var firstRowOfResult = new ResultToRowsMapper().Map(input).First();

            // assert
            Assert.AreEqual(expectedHeadingRow.Count, firstRowOfResult.Count);
            for (int i = 0; i < firstRowOfResult.Count; i++)
            {
                Assert.AreEqual(expectedHeadingRow[i], firstRowOfResult[i]);
            }
        }

        [Test]
        public void MapsDateColumnInExpectedFormat()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                { 
                    date, 
                    new Option<Day, DayOptionType>
                    { 
                        OptionOne = new Day()
                        {
                            Date = date
                        } 
                    } 
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual($"2021/12/01", firstDataRow[0]);

        }

        [Test]
        public void MapsDatePrettyColumnInExpectedFormat()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual($"Wednesday, December 1, 2021", firstDataRow[1]);

        }

        [Test]
        public void MapsDayDescriptionCorrectly()
        {
            // arrange
            var expectedDayDescription = "Some cool description";
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            DayDescription = expectedDayDescription
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual(expectedDayDescription, firstDataRow[2]);

        }

        [Test]
        public void MapsEveningNameCorrectly()
        {
            // arrange
            var expected = "Eve of the Conversion of St Paul";
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            EveningName = expected
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual(expected, firstDataRow[3]);

        }

        [Test]
        public void MapsRclTrack1Together()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            RclTrack1Readings = new Option<RclReadings, ReadingsOptionType>(){
                                OptionOne = new RclReadings(){
                                     Psalms = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Psalm 69"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Acts 12:15-20"
                                        }
                                     },
                                     Gospel = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Psalm 69; Job 2:3-4; Acts 12:15-20; Mark 12:15-20", firstDataRow[7]);

        }

        [Test]
        public void UsesCanticleForRCLTrack1IfNoPsalm()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            RclTrack1Readings = new Option<RclReadings, ReadingsOptionType>(){
                                OptionOne = new RclReadings(){
                                     Canticle = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Canticle: Luke 1:68-79 (Benedictus)"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Acts 12:15-20"
                                        }
                                     },
                                     Gospel = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Canticle: Luke 1:68-79 (Benedictus); Job 2:3-4; Acts 12:15-20; Mark 12:15-20", firstDataRow[7]);

        }


        [Test]
        public void MapsRclTrack2Together()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            RclTrack2Readings = new Option<RclReadings, ReadingsOptionType>(){
                                OptionOne = new RclReadings(){
                                     Psalms = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Psalm 69"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Acts 12:15-20"
                                        }
                                     },
                                     Gospel = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Psalm 69; Job 2:3-4; Acts 12:15-20; Mark 12:15-20", firstDataRow[11]);

        }

        [Test]
        public void UsesCanticleForRCLTrack2IfNoPsalm()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            RclTrack2Readings = new Option<RclReadings, ReadingsOptionType>(){
                                OptionOne = new RclReadings(){
                                     Canticle = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Canticle: Luke 1:68-79 (Benedictus)"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Acts 12:15-20"
                                        }
                                     },
                                     Gospel = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Canticle: Luke 1:68-79 (Benedictus); Job 2:3-4; Acts 12:15-20; Mark 12:15-20", firstDataRow[11]);

        }


        [Test]
        public void MapsMorningPrayersTogether()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            MorningReadings = new Option<MorningReadings, ReadingsOptionType>(){ 
                                OptionOne = new MorningReadings(){ 
                                     Psalms = new Option<Reading, ReadingOptionType>(){ 
                                        OptionOne = new Reading{ 
                                            RawString = "Psalm 69"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Psalm 69; Job 2:3-4; Mark 12:15-20", firstDataRow[12]);

        }

        [Test]
        public void MapsEveningPrayersTogether()
        {
            // arrange
            var date = new DateOnly(2021, 12, 1);
            var input = new Dictionary<DateOnly, Option<Day, DayOptionType>>()
            {
                {
                    date,
                    new Option<Day, DayOptionType>
                    {
                        OptionOne = new Day()
                        {
                            Date = date,
                            EveningReadings = new Option<EveningReadings, ReadingsOptionType>(){
                                OptionOne = new EveningReadings(){
                                     Psalms = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Psalm 69"
                                        }
                                     },
                                     OldTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Job 2:3-4"
                                        }
                                     },
                                     NewTestament = new Option<Reading, ReadingOptionType>(){
                                        OptionOne = new Reading{
                                            RawString = "Mark 12:15-20"
                                        }
                                     }
                                }
                            }
                        }
                    }
                }
            };

            // act
            var firstDataRow = new ResultToRowsMapper().Map(input)[1]; // minus heading

            // assert
            Assert.AreEqual("Psalm 69; Job 2:3-4; Mark 12:15-20", firstDataRow[13]);

        }


    }
}
