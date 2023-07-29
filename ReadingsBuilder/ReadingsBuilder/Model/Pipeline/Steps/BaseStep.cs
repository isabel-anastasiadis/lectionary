
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Model.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public abstract class BaseStep
    {
        protected readonly List<RuleData> ApplicableRules;

        protected readonly IRuleApplier RuleApplier;

        protected abstract string RuleSetName { get; }

        public BaseStep(IRuleApplier ruleApplier, IAllDataFactory dataFactory)
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
                .ToList() ?? new List<RuleData>();

            if (!ApplicableRules.Any())
            {
                throw new ArgumentException("No matching rules were passed in");
            }
        }

        protected virtual bool ShouldIncludeRule(RuleData ruleData) {
            return ruleData.HandlingClassName == this.RuleSetName;
        }

    }
}
