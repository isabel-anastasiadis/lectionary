using System;
using System.Collections.Generic;
using System.IO;
using NUnit.Framework;
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Data.Utilities;
using ReadingsBuilder.Pipeline;

namespace Tests.Pipeline
{
    internal class RegressionTests
    {

        string snapshotDirectory = DirectoryHelper.SolutionDirectory + @"\Tests\Pipeline\ExpectedResultSnapshots";

        [Test]
        public void PipelineRunsForPreviousYearsWithoutChanges()
        {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var resultToRowsMapper = DependencyInjector.GetInstance<IResultToRowsMapper>();
            var csvWriter = DependencyInjector.GetInstance<ICsvWriter>();

            // act
            var allRowsOfRowsOfString = new List<List<string>>();
            foreach (var input in Inputs.All)
            {
                var result = classUnderTest.Run(input);
                var resultAsRowsOfRowsOfString = resultToRowsMapper.Map(result.Result);
                allRowsOfRowsOfString.AddRange(resultAsRowsOfRowsOfString);
            }
           
            var csvString = csvWriter.WriteToCSV(allRowsOfRowsOfString);

            var expectedCsvString = File.ReadAllText(snapshotDirectory + @"\PreviousResults.csv");

            // assert
            Assert.AreEqual(expectedCsvString, csvString);
        }

        [Test]
        public void PipelineRunsForCurrentYearWithoutChanges()
        {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var resultToRowsMapper = DependencyInjector.GetInstance<IResultToRowsMapper>();
            var csvWriter = DependencyInjector.GetInstance<ICsvWriter>();

            var input = Inputs.FOR_2024_TO_2025;

            // act
            var result = classUnderTest.Run(input);
            var resultAsRowsOfRowsOfString = resultToRowsMapper.Map(result.Result);
            var csvString = csvWriter.WriteToCSV(resultAsRowsOfRowsOfString);

            var expectedCsvString = File.ReadAllText(snapshotDirectory + @"\Result.csv");

            // assert
            Assert.AreEqual(expectedCsvString, csvString);
        }
    }
}
