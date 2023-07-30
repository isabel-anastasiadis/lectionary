
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Data;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Pipeline;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Data.Utilities;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

/**
 * TODO
 * - Automatically work out Sundays (add a RCL_YEAR filter and add them as 3 separate rows in the base by week rules they apply to)
 * - Finish adding Festivals
 * - Finish the 4 weeks leading up to advent rules
 * - Make the 1st EP readings have their own columns and be on the same row as their festival rules.
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
var processingFilePath = DirectoryHelper.JupyterDirectory + @"\input\all_readings.csv";
File.Delete(processingFilePath);
File.Copy(Path.Combine(ResultWriter.DefaultFilePath, "Result.csv"), processingFilePath);


