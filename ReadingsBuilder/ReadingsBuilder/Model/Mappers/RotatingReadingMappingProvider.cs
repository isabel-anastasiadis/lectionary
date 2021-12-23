
using ReadingsBuilder.Model.Data.DTOs;

namespace ReadingsBuilder.Model.Mappers
{
    public class RotatingReadingMappingProvider : IRotatingReadingMappingProvider
    {

        /// <summary>
        /// Stubbing this for now.  TODO properly later, reading from csv
        /// </summary>
        /// <returns></returns>
        public List<RotatingReadingMapping> RotatingReadingMappings()
        {

            var list = new List<RotatingReadingMapping>();

            // 2011-12
            list.Add(new RotatingReadingMapping()
            {
                FirstDay = new DateOnly(2021,11,28),
                LastDay = new DateOnly(2022,11,26),
                MorningOldTestamentOrdinary = RotatingReadingType.OldTestament1,
                MorningOldTestamentSeasonal = RotatingReadingType.OldTestament1,
                MorningNewTestament = RotatingReadingType.NewTestament1,
                EveningOldTestamentOrdinary = RotatingReadingType.OldTestament2b,
                EveningOldTestamentSeasonal = RotatingReadingType.OldTestament2a,
                EveningNewTestament = RotatingReadingType.NewTestament2
            });

            return list;

        }

    }
}
