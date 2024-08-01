
using ReadingsBuilder.Model;
using static ReadingsBuilder.Pipeline.Steps.Utility.TransferCalculator;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface ITransferCalculator
    {
        bool RuleApplies(Rule rule);

        DateOnly? GetNextAvailableDate(PipelineWorkingResult workingResult, DateOnly plannedDate);
    }
}
