using ReadingsBuilder.Model.Data.DTOs;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline.DTOs;


#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace ReadingsBuilder.Model.Pipeline.Steps.Utility
{
    public class RuleApplier : IRuleApplier
    {
        private readonly IRotatingReadingMappingProvider _rotatingReadingMappingProvider;

        public RuleApplier(IRotatingReadingMappingProvider rotatingReadingMappingProvider)
        {
            _rotatingReadingMappingProvider = rotatingReadingMappingProvider;
        }

        public void ApplyRuleToDay(RuleData ruleData, Day day)
        {
            var rotatingReadingMapping = _rotatingReadingMappingProvider.GetApplicableMapping(day.Date);

            if (rotatingReadingMapping == null)
            {
                throw new ArgumentException($"There was no RotatingReadingMapping returned for date '{day.Date}'");
            }

            ApplyDayDescription(ruleData, day);

            ApplyIsSeasonalTime(ruleData, day); // NOTE: this needs to happen before rotating readings

            ApplyPsalms(ruleData, day);

            ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);

            ApplySetReadings(ruleData, day);

        }

        public void ApplyDayDescription(RuleData ruleData, Day day)
        {

            if (ruleData.DayName != null)
            {
                day.DayDescription = ruleData.DayName;
            }
        }

        public void ApplyIsSeasonalTime(RuleData ruleData, Day day)
        {
            if (ruleData.IsSeasonalTime != null)
            {
                day.IsSeasonalTime = ruleData.IsSeasonalTime;
            }
        }

        public void ApplyPsalms(RuleData ruleData, Day day)
        {
            if (ruleData.HasMorningPsalms)
            {
                day.MorningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + ruleData.MorningPsalmsMain;
            }

            if (ruleData.HasEveningPsalms)
            {
                day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + ruleData.EveningPsalmsMain;
            }

        }

        public void ApplyRotatingReadings(RotatingReadingMapping rotatingReadingMapping, RuleData ruleData, Day day)
        {
            if (!ruleData.HasRotatingReadings)
            {
                return;
            }

            if (rotatingReadingMapping == null)
            {
                throw new ArgumentNullException(nameof(rotatingReadingMapping));
            }

            if (day.IsSeasonalTime == null)
            {
                throw new ArgumentNullException($"Expected {nameof(day)}.{nameof(day.IsSeasonalTime)} to be set for day {day} in order to apply rotating rules.");
            }

            // morning old testament
            var value = day.IsSeasonalTime.Value
                ? ruleData.RotatingReadings[rotatingReadingMapping.MorningOldTestamentSeasonal]
                : ruleData.RotatingReadings[rotatingReadingMapping.MorningOldTestamentOrdinary];

            day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = value;


            // morning new testament
            value = ruleData.RotatingReadings[rotatingReadingMapping.MorningNewTestament];
            day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = value;

            // evening old testament
            value = day.IsSeasonalTime.Value
                ? ruleData.RotatingReadings[rotatingReadingMapping.EveningOldTestamentSeasonal]
                : ruleData.RotatingReadings[rotatingReadingMapping.EveningOldTestamentOrdinary];
            day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = value;

            // evening new testament
            value = ruleData.RotatingReadings[rotatingReadingMapping.EveningNewTestament];
            day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = value;


        }

        public void ApplySetReadings(RuleData ruleData, Day day)
        {
            if (ruleData.MorningOldTestament != null)
            {
                day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = ruleData.MorningOldTestament;
            }

            if (ruleData.MorningNewTestament != null)
            {
                day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = ruleData.MorningNewTestament;
            }

            if (ruleData.EveningOldTestament != null)
            {
                day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = ruleData.EveningOldTestament;
            }

            if (ruleData.EveningNewTestament != null)
            {
                day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = ruleData.EveningNewTestament;
            }
        }

    }
}

#pragma warning restore CS8602 // Dereference of a possibly null reference.