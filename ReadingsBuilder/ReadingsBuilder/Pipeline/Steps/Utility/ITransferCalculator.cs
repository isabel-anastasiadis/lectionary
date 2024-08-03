
using ReadingsBuilder.Model;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface ITransferCalculator
    {
        /// <summary>
        /// Returns a new DateOnly for the next available transfer date, or null if it does not need transferring.
        /// </summary>
        DateOnly? GetTransferredDate(FeastOrSeasonType ruleFlags, PipelineWorkingResult workingResult, DateOnly plannedDate);
    }
}
