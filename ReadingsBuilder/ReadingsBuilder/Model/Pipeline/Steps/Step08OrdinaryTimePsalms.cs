﻿
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Pipeline.DTOs;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Model.Pipeline.Steps
{
    public class Step08OrdinaryTimePsalms : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step08OrdinaryTimePsalms(IRuleApplier ruleApplier, IAllDataFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 8;

        protected override string RuleSetName => "OrdinaryTimePsalms.cs";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult)
        {
            if (workingResult.Input?.FifthSundayAfterEpiphany == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.FifthSundayAfterEpiphany));
            }

            if (workingResult.Input?.AshWednesday == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.AshWednesday));
            }

            if (workingResult.Input?.OrdinaryTimePsalmsFirstChunkStartingIndex == null)
            {
                throw new ArgumentNullException(nameof(workingResult.Input.OrdinaryTimePsalmsFirstChunkStartingIndex));
            }

            var firstMondayDate = workingResult.Input.FifthSundayAfterEpiphany.Value.Clone().AddDays(1);
            var shroveTuesday = workingResult.Input.AshWednesday.Value.Clone().AddDays(-1);
            var ruleDataToStartWith = ApplicableRules[workingResult.Input.OrdinaryTimePsalmsFirstChunkStartingIndex.Value];

            ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, ApplicableRules, firstMondayDate, ruleDataToStartWith, shroveTuesday);

            return workingResult;
        }
    }
}
