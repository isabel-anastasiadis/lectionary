
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public abstract class BaseStep
    {
        protected readonly List<RuleData> ApplicableRules;

        protected readonly List<RotatingReadingMapping> RotatingReadingMappings;

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

            if (allData.RotatingReadingMappings == null)
            {
                throw new ArgumentNullException(nameof(allData.RotatingReadingMappings));
            }

            if (allData.RuleData == null)
            {
                throw new ArgumentNullException(nameof(allData.RuleData));
            }

            RotatingReadingMappings = allData.RotatingReadingMappings;

            ApplicableRules = allData.RuleData?
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

        protected void ApplyRuleToDay(Day day, RuleData ruleData)
        {
            var rotatingReadingMapping = RotatingReadingMappings.Where(x => x.Year == day.Date.Year).First();
            RuleApplier.ApplyRuleToDay(rotatingReadingMapping, ruleData, day);
        }


    }
}
