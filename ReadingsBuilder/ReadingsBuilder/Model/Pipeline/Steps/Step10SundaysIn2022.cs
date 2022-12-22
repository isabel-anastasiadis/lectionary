
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step10SundaysIn2022 : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step10SundaysIn2022(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfMonthRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 10;

        protected override string RuleSetName => "SundaysIn2022.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            var firstRule = ApplicableRules.First();
            var firstDateHandled = new DateOnly(2021, firstRule.Month.Value, firstRule.Day.Value);

            var lastRule = ApplicableRules.Last();
            var lastDateHandled = new DateOnly(2022, lastRule.Month.Value, lastRule.Day.Value);

            if (!workingResult.Result.Keys.Contains(firstDateHandled) && workingResult.Result.Keys.Contains(lastDateHandled))
                return workingResult;

            return ruleSetApplier.ApplyRulesByDayOfMonth(workingResult, ApplicableRules);
        }
    }
}
