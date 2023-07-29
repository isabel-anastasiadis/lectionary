using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Rules
{
    public interface IRulesMapper
    {
        List<Model.Rule> MapRowsToRules(List<List<string>> rows);
    }
}