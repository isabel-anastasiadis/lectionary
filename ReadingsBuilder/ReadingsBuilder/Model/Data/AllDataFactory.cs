
using ReadingsBuilder.Model.Mappers;

namespace ReadingsBuilder.Model.Data
{
    public class AllDataFactory : IAllDataFactory
    {
        public static string DEFAULT_CSV_FILE_PATH = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\All Rules.csv";
        private readonly ICsvReader csvReader;
        private readonly IRuleDataMapper ruleDataMapper;
        private readonly IRotatingReadingMappingProvider rotatingReadingMappingProvider;

        public AllDataFactory(ICsvReader csvReader, 
            IRuleDataMapper ruleDataMapper, 
            IRotatingReadingMappingProvider rotatingReadingMappingProvider)
        {
            this.csvReader = csvReader;
            this.ruleDataMapper = ruleDataMapper;
            this.rotatingReadingMappingProvider = rotatingReadingMappingProvider;
        }

        public AllData GenerateAllData(string? csvFilePath = null)
        {
            var result = new AllData();

            result.RuleData = ruleDataMapper.MapRowsToRuleData(csvReader.ReadRows(csvFilePath ?? DEFAULT_CSV_FILE_PATH));
            result.RotatingReadingMappings = rotatingReadingMappingProvider.RotatingReadingMappings();

            return result;
        }


    }
}
