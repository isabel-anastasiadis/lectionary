
using ReadingsBuilder.Model.Mappers;

namespace ReadingsBuilder.Model.Data
{
    public class AllDataFactory
    {
        public static string DEFAULT_CSV_FILE_PATH = @"c:\github\lectionary\ReadingsBuilder\ReadingsBuilder\Model\Data\All Rules.csv";

        private CsvReader csvReader;
        private RuleDataMapper ruleDataMapper;
        private RotatingReadingMappingMapper rotatingReadingsMappingMapper;

        public AllDataFactory()
        {
            this.csvReader = new CsvReader();
            this.ruleDataMapper = new RuleDataMapper();
            this.rotatingReadingsMappingMapper = new RotatingReadingMappingMapper();
        }

        public AllData GenerateAllData(string? csvFilePath = null)
        {
            var result = new AllData();

            result.RuleData = ruleDataMapper.MapRowsToRuleData(csvReader.ReadRows(csvFilePath ?? DEFAULT_CSV_FILE_PATH));
            result.RotatingReadingMappings = rotatingReadingsMappingMapper.RotatingReadingMappings();

            return result;
        }


    }
}
