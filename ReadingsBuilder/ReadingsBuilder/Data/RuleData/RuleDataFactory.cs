
using ReadingsBuilder.Data.Utilities;

namespace ReadingsBuilder.Data.RuleData
{
    public class RuleDataFactory : IRuleDataFactory
    {
        public static string DEFAULT_CSV_FILE_PATH = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Data\RuleData\All Rules.csv";
        private readonly ICsvReader csvReader;
        private readonly IRuleDataMapper ruleDataMapper;


        public RuleDataFactory(ICsvReader csvReader, 
            IRuleDataMapper ruleDataMapper)
        {
            this.csvReader = csvReader;
            this.ruleDataMapper = ruleDataMapper;
        }

        public List<Model.RuleData> GenerateAllData(string? csvFilePath = null)
        {
            return ruleDataMapper.MapRowsToRuleData(csvReader.ReadRows(csvFilePath ?? DEFAULT_CSV_FILE_PATH));
        }


    }
}
