using ReadingsBuilder.Model;
using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step12FeastDaysByDayOfMonth : BaseStep, IStep
    {
        private readonly IByDayOfMonthRuleSetApplier ruleSetApplier;

        public Step12FeastDaysByDayOfMonth(IRuleApplier ruleApplier, 
            IRulesFactory dataFactory, 
            IByDayOfMonthRuleSetApplier ruleSetApplier
            ) : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public int Order => 12;

        protected override string RuleSetName => "FeastDaysByDayOfMonth";

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, LiturgicalYear liturgicalYear)
        {
            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // the rules alternate between eveningbefore and the festival
            for (int i = 0; i < applicableRules.Count; i += 2)
            { 
                var eveningBeforeRule = applicableRules[i];
                var festivalRule = applicableRules[(i + 1)];

                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, 
                    liturgicalYear, 
                    eveningBeforeRule,
                    null);

                ruleSetApplier.ApplyRuleByDayOfMonth(workingResult, 
                    liturgicalYear, 
                    festivalRule, 
                    null);
            }

            return workingResult;
        }
    }
}
