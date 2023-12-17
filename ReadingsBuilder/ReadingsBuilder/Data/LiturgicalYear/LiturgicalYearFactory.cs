using ReadingsBuilder.Model;

namespace ReadingsBuilder.Data.Result
{
    public class LiturgicalYearFactory : ILiturgicalYearFactory
    {
        private readonly List<LiturgicalYear> _years;

        /// <summary>
        /// Stubbing this for now.  TODO properly later, reading from csv
        /// </summary>
        /// <returns></returns>
        public LiturgicalYearFactory()
        {
            _years = new List<LiturgicalYear>();

            // See https://www.churchofengland.org/sites/default/files/2018-02/weekday-lectionary-table-2020-2045.pdf

            _years.Add(new LiturgicalYear()
            {
                RclYear = RclYear.C,
                FirstDay = new DateOnly(2021, 11, 28),
                LastDay = new DateOnly(2022, 11, 26),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                MorningNewTestament = RotatingReadingType.NewTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });

            _years.Add(new LiturgicalYear()
            {
                RclYear = RclYear.A,
                FirstDay = new DateOnly(2022, 11, 27),
                LastDay = new DateOnly(2023, 12, 2),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                MorningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                EveningNewTestament = RotatingReadingType.NewTestament1
            });

            _years.Add(new LiturgicalYear()
            {
                RclYear = RclYear.B,
                FirstDay = new DateOnly(2023, 12, 3),
                LastDay = new DateOnly(2024, 11, 30),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });
        }

        public LiturgicalYear Get(DateOnly startDate, DateOnly endDate)
        {
            return _years
                .Where(x => x.FirstDay <= startDate && x.LastDay >= startDate)
                .Where(x => x.FirstDay <= endDate && x.LastDay >= endDate).Single();
        }

    }
}
