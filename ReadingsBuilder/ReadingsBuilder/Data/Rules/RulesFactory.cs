
using ReadingsBuilder.Data.Utilities;

namespace ReadingsBuilder.Data.Rules
{
    public class RulesFactory : IRulesFactory
    {
        public static string DEFAULT_CSV_FILE_PATH = DirectoryHelper.SolutionDirectory + @"\ReadingsBuilder\Data\Rules\All Rules.csv";
        private readonly ICsvReader csvReader;
        private readonly IRulesMapper RulesMapper;


        public RulesFactory(ICsvReader csvReader, 
            IRulesMapper RulesMapper)
        {
            this.csvReader = csvReader;
            this.RulesMapper = RulesMapper;
        }

        public List<Model.Rule> GenerateAllData(string? csvFilePath = null)
        {
            return RulesMapper.MapRowsToRules(csvReader.ReadRows(csvFilePath ?? DEFAULT_CSV_FILE_PATH));
        }


    }
}
