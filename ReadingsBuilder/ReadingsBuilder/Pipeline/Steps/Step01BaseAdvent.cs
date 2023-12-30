

using ReadingsBuilder.Data.Rules;
using ReadingsBuilder.Model.Result;
using ReadingsBuilder.Pipeline.Steps.Utility;

namespace ReadingsBuilder.Pipeline.Steps
{
    public class Step01BaseAdvent : BaseStep, IStep
    {
        private readonly IByDayOfWeekRuleSetApplier ruleSetApplier;

        public int Order => 1;

        protected override string RuleSetName => "BaseAdvent";


        public Step01BaseAdvent(IRuleApplier ruleApplier, IRulesFactory dataFactory, IByDayOfWeekRuleSetApplier ruleSetApplier ) 
            : base(ruleApplier, dataFactory)
        {
            this.ruleSetApplier = ruleSetApplier;
        }

        public PipelineWorkingResult RunStep(PipelineWorkingResult workingResult, Model.LiturgicalYear liturgicalYear)
        {

            if (workingResult == null) {
                throw new ArgumentNullException(nameof(workingResult));
            }
           
            var firstDate = workingResult.Result.Keys.OrderBy(x => x).FirstOrDefault();
            if (firstDate.DayOfWeek != DayOfWeek.Sunday) {
                throw new ArgumentException($"Expected the first day to be a Sunday, but it was {firstDate.DayOfWeek} ({firstDate}).  The first day should be the 1st Sunday of Advent.", nameof(workingResult.Result));
            }

            var applicableRules = ApplicableRules(liturgicalYear.RclYear);

            // the first sunday of advent
            var RulesToStartWith = applicableRules.FirstOrDefault();

            return ruleSetApplier.ApplyRulesByDayOfWeek(workingResult, liturgicalYear, applicableRules, firstDate, RulesToStartWith, null);
        }

    }
}
