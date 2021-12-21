
namespace ReadingsBuilder.Model.Pipeline
{
    public class RuleApplier
    {
        public void ApplyRuleToDay(RotatingReadingMapping rotatingReadingMapping, RuleData ruleData, Day day) {

            ApplyDayDescription(ruleData, day);

            ApplyIsSeasonalTime(ruleData, day); // NOTE: this needs to happen before rotating readings

            ApplyPsalms(ruleData, day);

            if (ruleData.HasRotatingReadings) { 
                ApplyRotatingReadings(rotatingReadingMapping, ruleData, day);
            }
        }

        public void ApplyDayDescription(RuleData ruleData, Day day) {

            if (ruleData.DayName != null)
            {
                day.DayDescription = ruleData.DayName;
            }
        }

        public void ApplyIsSeasonalTime(RuleData ruleData, Day day) {
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
            if (rotatingReadingMapping == null)
            {
                throw new ArgumentNullException(nameof(rotatingReadingMapping));
            }

            if (day.IsSeasonalTime == null){
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

    }
}
