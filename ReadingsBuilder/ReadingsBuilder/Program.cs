
using ReadingsBuilder.Model.Pipeline;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

var pipeline = new Pipeline();
var result = pipeline.Run(new Input { StartDate = new DateOnly(2021, 12, 1), EndDate = new DateOnly( 2022, 1, 6 ) });



foreach (var key in result.Result.Keys)
{
    var day = result?.Result[key];
    Console.WriteLine(day.OptionOne);
}




