
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Mappers;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

var csvReader = new CsvReader();
var rows = csvReader.ReadRows();
var ruleDataReader = new RuleDataMapper();
var result = ruleDataReader.MapRowsToRuleData(rows);

foreach (var row in result)
{
    Console.WriteLine(row);
}
Console.WriteLine(result);



