
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Data;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Pipeline.DTOs;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

/**
 * TODO
 * - Finish adding Festivals
 * - Finish the 4 weeks leading up to advent rules
 * - Change the result and app to show the 1st EP of [festival name] 
 * - Deep linking on the app to dates
 */

var pipeline = DependencyInjector.GetInstance<IPipeline>();
var resultWriter = DependencyInjector.GetInstance<IResultWriter>();

// previous years results (for regression testing)
var previousYearsInputs = new List<Input>() 
{
    new Input
    {
        StartDate = new DateOnly(2021, 11, 28),
        EndDate = new DateOnly(2022, 10, 30), // Haven't done Transfiguration of the Beloved Son and beyond for set feastival days.  Otherwise done until 4th Sun before Advent.
        FifthSundayAfterEpiphany = new DateOnly(2022, 2, 6),
        AshWednesday = new DateOnly(2022, 3, 2),
        PalmSunday = new DateOnly(2022, 4, 10),
        FirstSundayOfAdvent = new DateOnly(2022, 11, 27),
        // haven't worked out the rule for these so you just have to check
        OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
    }
};

File.Delete(Path.Combine(ResultWriter.DefaultFilePath, "PreviousResults.csv"));

foreach (var previousYearsInput in previousYearsInputs)
{
    var previousYearsResults = pipeline.Run(previousYearsInput);
    resultWriter.WriteResult(previousYearsResults, "PreviousResults.csv", overwrite: false, logToConsole: false);
}


// this years result
var input = new Input 
{ 
    StartDate = new DateOnly(2022, 11, 27), // first sun of advent
    EndDate = new DateOnly(2023, 11, 4), // Sat before 4th Sun of Advent.  Haven't done Transfiguration of the Beloved Son and beyond for set feastival days.  Otherwise done until 4th Sun before Advent.
    FifthSundayAfterEpiphany = new DateOnly(2023, 2, 5),
    AshWednesday = new DateOnly(2023, 2, 22),
    PalmSunday = new DateOnly(2023, 4, 2),
    FirstSundayOfAdvent = new DateOnly(2023, 12, 3),
    // haven't worked out the rule for these so you just have to check
    OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
};
var result = pipeline.Run(input);
resultWriter.WriteResult(result, "Result.csv", overwrite: true, logToConsole: true);

// copy to the processing folder
var processingFilePath = @"c:\github\lectionary\jupyter\input\all_readings.csv";
File.Delete(processingFilePath);
File.Copy(Path.Combine(ResultWriter.DefaultFilePath, "Result.csv"), processingFilePath);


