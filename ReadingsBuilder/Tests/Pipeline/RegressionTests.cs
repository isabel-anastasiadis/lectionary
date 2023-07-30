using System;
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

            var input = Inputs.FOR_2021_TO_2022;

            // act
            var result = classUnderTest.Run(input);
            var resultAsRowsOfRowsOfString = resultToRowsMapper.Map(result.Result);
            var csvString = csvWriter.WriteToCSV(resultAsRowsOfRowsOfString);

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

            var input = Inputs.FOR_2022_TO_2023;

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
