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

            // See https://www.churchofengland.org/sites/default/files/2017-11/weekday%20lectionary%202005.pdf

            // Same as 2009-2010
            _years.Add(new LiturgicalYear()
            {
                FirstDay = new DateOnly(2021, 11, 28),
                LastDay = new DateOnly(2022, 11, 26),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                MorningNewTestament = RotatingReadingType.NewTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });

            // Same as 2010 - 2011
            _years.Add(new LiturgicalYear()
            {
                FirstDay = new DateOnly(2022, 11, 27),
                LastDay = new DateOnly(2023, 12, 2),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                MorningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                EveningNewTestament = RotatingReadingType.NewTestament1
            });
        }

        public LiturgicalYear? Get(DateOnly date)
        {
            return _years.Where(x => x.FirstDay <= date && x.LastDay >= date).FirstOrDefault();
        }

    }
}
