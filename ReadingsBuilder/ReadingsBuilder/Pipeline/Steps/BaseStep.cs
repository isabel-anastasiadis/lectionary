
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public abstract class BaseStep
    {
        protected readonly List<Rule> ApplicableRules;

        protected readonly IRuleApplier RuleApplier;

        protected abstract string RuleSetName { get; }

        public BaseStep(IRuleApplier ruleApplier, IRulesFactory dataFactory)
        {
            RuleApplier = ruleApplier;

            if (dataFactory == null)
            {
                throw new ArgumentNullException(nameof(dataFactory));
            }

            var allData = dataFactory.GenerateAllData();

            ApplicableRules = allData
                .Where(x => ShouldIncludeRule(x))
                .OrderBy(x => x.RowNumberInRuleSet)
                .ToList() ?? new List<Rule>();

            if (!ApplicableRules.Any())
            {
                throw new ArgumentException("No matching rules were passed in");
            }
        }

        protected virtual bool ShouldIncludeRule(Rule rule) {
            return rule.HandlingClassName == this.RuleSetName;
        }

    }
}
