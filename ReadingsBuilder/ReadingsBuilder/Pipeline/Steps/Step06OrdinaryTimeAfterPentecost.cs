﻿using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step06OrdinaryTimeAfterPentecost : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step06OrdinaryTimeAfterPentecost(IRuleApplier ruleApplier, 
            IRulesFactory dataFactory, 
            IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 6;

        protected override string RuleSetName => "OrdinaryTimeAfterPentecost.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            if (workingResult.Input?.Pentecost == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.Pentecost));
            }

            if (workingResult.Input?.FourthSundayBeforeAdvent == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.FourthSundayBeforeAdvent));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // work out what date to start with
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Input
                .Pentecost
                .Value
                .AddDays(1);


            var dateOfLastDayRuleAppliesTo = workingResult.Input.FourthSundayBeforeAdvent.Value;

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult,
                liturgicalYear,
                applicableRules,
                dateOfFirstDayTheRuleAppliesTo,
                RulesToStartWith: null,
                dateOfLastDayRuleAppliesTo);

        }
    }
}
