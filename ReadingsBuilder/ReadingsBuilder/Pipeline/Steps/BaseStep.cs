
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public abstract class BaseStep
    {
        protected readonly IRuleApplier RuleApplier;

        private readonly List<Rule> AllRules;

        protected abstract string RuleSetName { get; }

        public BaseStep(IRuleApplier ruleApplier, IRulesFactory rulesFactory)
        {
            RuleApplier = ruleApplier;

            if (rulesFactory == null)
            {
                throw new ArgumentNullException(nameof(rulesFactory));
            }

            // TODO consider passing these in the method, rather than recomputing in each step constructor
            AllRules = rulesFactory.GenerateAllData();
        }

        public List<Rule> ApplicableRules(RclYear rclYear)
        {
            var result = AllRules
                .Where(rule => rule.HandlingClassName == RuleSetName)
                .Where(rule => rule.RclYear == RclYear.All || rule.RclYear == rclYear)
                .OrderBy(rule => rule.RowNumberInRuleSet);

            if (!result.Any())
            {
                throw new ArgumentException("No matching rules were passed in");
            }

            return result.ToList();
        }
    }
}
