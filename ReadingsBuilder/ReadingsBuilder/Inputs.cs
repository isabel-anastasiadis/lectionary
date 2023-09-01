

using ReadingsBuilder.Pipeline;

namespace ReadingsBuilder
{
    public class Inputs
    {

        public static readonly Input FOR_2021_TO_2022 = new()
        {
            StartDate = new DateOnly(2021, 11, 28),  // first sun of advent
            EndDate = new DateOnly(2022, 11, 26),
            FifthSundayAfterEpiphany = new DateOnly(2022, 2, 6),
            AshWednesday = new DateOnly(2022, 3, 2),
            PalmSunday = new DateOnly(2022, 4, 10),
            FirstSundayOfAdventTheFollowingYear = new DateOnly(2022, 11, 27),
            // haven't worked out the rule for these so you just have to check
            OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
        };

        public static readonly Input FOR_2022_TO_2023 = new()
        {
            StartDate = new DateOnly(2022, 11, 27), // first sun of advent
            EndDate = new DateOnly(2023, 12, 2),
            FifthSundayAfterEpiphany = new DateOnly(2023, 2, 5),
            AshWednesday = new DateOnly(2023, 2, 22),
            PalmSunday = new DateOnly(2023, 4, 2),
            FirstSundayOfAdventTheFollowingYear = new DateOnly(2023, 12, 3),
            // haven't worked out the rule for these so you just have to check
            OrdinaryTimePsalmsSecondChunkStartingIndex = 43  // 0 based index
        };
    }
}
