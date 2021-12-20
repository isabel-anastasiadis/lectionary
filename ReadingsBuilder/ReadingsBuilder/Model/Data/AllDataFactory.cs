
using ReadingsBuilder.Model.Mappers;

namespace ReadingsBuilder.Model.Data
{
    public class AllDataFactory
    {
        private CsvReader csvReader;
        private RuleDataMapper ruleDataMapper;
        private RotatingReadingMappingMapper rotatingReadingsMappingMapper;

        public AllDataFactory()
        {
            this.csvReader = new CsvReader();
            this.ruleDataMapper = new RuleDataMapper();
            this.rotatingReadingsMappingMapper = new RotatingReadingMappingMapper();
        }

        public AllData GenerateAllData()
        {
            var result = new AllData();

            result.RuleData = ruleDataMapper.MapRowsToRuleData(csvReader.ReadRows());
            result.RotatingReadingMappings = rotatingReadingsMappingMapper.RotatingReadingMappings();

            return result;
        }


    }
}
