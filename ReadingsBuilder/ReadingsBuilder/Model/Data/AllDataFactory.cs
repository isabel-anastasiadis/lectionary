
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Mappers;

namespace ReadingsBuilder.Model.Data
{
    public class AllDataFactory : IAllDataFactory
    {
        public static string DEFAULT_CSV_FILE_PATH = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\All Rules.csv";
        private readonly ICsvReader csvReader;
        private readonly IRuleDataMapper ruleDataMapper;


        public AllDataFactory(ICsvReader csvReader, 
            IRuleDataMapper ruleDataMapper)
        {
            this.csvReader = csvReader;
            this.ruleDataMapper = ruleDataMapper;
        }

        public List<RuleData> GenerateAllData(string? csvFilePath = null)
        {
            return ruleDataMapper.MapRowsToRuleData(csvReader.ReadRows(csvFilePath ?? DEFAULT_CSV_FILE_PATH));
        }


    }
}
