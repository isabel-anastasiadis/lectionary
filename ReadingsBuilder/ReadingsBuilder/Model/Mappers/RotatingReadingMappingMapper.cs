
namespace ReadingsBuilder.Model.Mappers
{
    public class RotatingReadingMappingMapper
    {

        /// <summary>
        /// Stubbing this for now.  TODO properly later, reading from csv
        /// </summary>
        /// <returns></returns>
        public List<RotatingReadingMapping> RotatingReadingMappings() { 
        
            var list = new List<RotatingReadingMapping>();

            // 2011-12
            list.Add(new RotatingReadingMapping()
            {
                Year = 2020,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                MorningNewTestament = RotatingReadingType.NewTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });

            // 2012-13
            list.Add(new RotatingReadingMapping()
            {
                Year = 2021,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                MorningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                EveningNewTestament = RotatingReadingType.NewTestament1
            });

            // 2013-14
            list.Add(new RotatingReadingMapping()
            {
                Year = 2022,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                MorningNewTestament = RotatingReadingType.NewTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });

            // 2014-15
            list.Add(new RotatingReadingMapping()
            {
                Year = 2023,
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament2a,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                MorningNewTestament = RotatingReadingType.NewTestament2,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                EveningNewTestament = RotatingReadingType.NewTestament1
            });

            return list;

        }

    }
}
