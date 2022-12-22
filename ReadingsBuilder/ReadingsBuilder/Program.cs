
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

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
var input = new Input 
{ 
    StartDate = new DateOnly(2022, 11, 27), // first sun of advent
    EndDate = new DateOnly(2023, 2, 2), // Haven't done Transfiguration of the Beloved Son and beyond for set feastival days.  Otherwise done until 4th Sun before Advent.
    FifthSundayAfterEpiphany = new DateOnly(2023, 2, 5),
    AshWednesday = new DateOnly(2023, 2, 22),
    PalmSunday = new DateOnly(2023, 4, 2),
    FirstSundayOfAdvent = new DateOnly(2023, 12, 3),
    // wed 1st Feb seems to be the last seasonal psalms day
    // Starts on Thur 2nd Feb Row 5, index 4
    OrdinaryTimePsalmsFirstChunkStartingIndex = 4, // haven't worked out the rule for these so you just have to check
    OrdinaryTimePsalmsSecondChunkStartingIndex = 0  // 0 based index
};
var result = pipeline.Run(input);

var filePath = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\Result.csv";


new CsvWriter().WriteToCSV(new ResultToRowsMapper().Map(result.Result), filePath);

foreach (var key in result.Result.Keys)
{
    var day = result.Result[key];
    Console.WriteLine(day.OptionOne);
}


