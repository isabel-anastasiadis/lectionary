
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.DTOs;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

var pipeline = DependencyInjector.GetInstance<IPipeline>();
var input = new Input 
{ 
    StartDate = new DateOnly(2021, 12, 1), 
    EndDate = new DateOnly(2022, 10, 30), // 4th Sunday before Advent
    FifthSundayAfterEpiphany = new DateOnly(2022, 2, 6),
    AshWednesday = new DateOnly(2022, 3, 2),
    PalmSunday = new DateOnly(2022, 4, 10),
    FirstSundayOfAdvent = new DateOnly(2022, 11, 27),
    OrdinaryTimePsalmsFirstChunkStartingIndex = 8
};
var result = pipeline.Run(input);

var filePath = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\Result.csv";


new CsvWriter().WriteToCSV(new ResultToRowsMapper().Map(result.Result), filePath);

foreach (var key in result.Result.Keys)
{
    var day = result.Result[key];
    Console.WriteLine(day.OptionOne);
}


