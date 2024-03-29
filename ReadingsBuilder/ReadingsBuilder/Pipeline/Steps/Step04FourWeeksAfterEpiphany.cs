﻿
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step04FourWeeksAfterEpiphany : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public Step04FourWeeksAfterEpiphany(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 4;

        protected override string RuleSetName => "FourWeeksAfterEpiphany";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear)
        {

            if (workingResult == null)
            {
                throw new ArgumentNullException(nameof(workingResult));
            }

            // work out what one to start with
            // Baptism of the lord is the first Sun after epiphany, so need the sat before to do the EP before
            var dateOfFirstDayTheRuleAppliesTo = workingResult.Result.Keys
                .OrderBy(x => x)
                .Where(x => x.Month == 1 && x.Day >= 6 && x.DayOfWeek == DayOfWeek.Saturday)  // The first Saturday including or after the 6th Jan
                .FirstOrDefault();

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            var RulesToStartWith = applicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, dateOfFirstDayTheRuleAppliesTo, RulesToStartWith, null);

        }
    }
}
