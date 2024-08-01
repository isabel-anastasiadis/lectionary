
using ReadingsBuilder.Model;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface ITransferCalculator
    {
        bool RuleApplies(FeastOrSeasonType ruleFlags);

        DateOnly? GetNextAvailableDate(FeastOrSeasonType ruleFlags, PipelineWorkingResult workingResult, DateOnly plannedDate);
    }
}
