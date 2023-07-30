
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Data;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;

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

// previous years results (for regression detection)
var previousYearsInputs = new List<Input>() 
{
    Inputs.FOR_2021_TO_2022
};

File.Delete(Path.Combine(ResultWriter.DefaultFilePath, "PreviousResults.csv"));

foreach (var previousYearsInput in previousYearsInputs)
{
    var previousYearsResults = pipeline.Run(previousYearsInput);
    resultWriter.WriteResult(previousYearsResults, "PreviousResults.csv", overwrite: false, logToConsole: false);
}


var result = pipeline.Run(Inputs.FOR_2022_TO_2023);
resultWriter.WriteResult(result, "Result.csv", overwrite: true, logToConsole: true);

// copy to the processing folder
var processingFilePath = @"c:\github\lectionary\jupyter\input\all_readings.csv";
File.Delete(processingFilePath);
File.Copy(Path.Combine(ResultWriter.DefaultFilePath, "Result.csv"), processingFilePath);


