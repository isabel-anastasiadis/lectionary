using ReadingsBuilder.Model;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Model.Result;


#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class RuleApplier : IRuleApplier
    {
        public void ApplyRuleToDay(Rule rule, Day day, LiturgicalYear liturgicalYear, ApplyToOption applyTo)
        {
            ApplyDayDescription(rule, day);
            ApplyIsSeasonalTime(rule, day); // NOTE: this needs to happen before rotating readings

            ApplyFeastOrSeasonType(rule, day);

            var applyToMorning = applyTo == ApplyToOption.MorningOnly || applyTo == ApplyToOption.WholeDay;
            var applyToEvening = applyTo == ApplyToOption.EveningOnly || applyTo == ApplyToOption.WholeDay;

            ApplyPsalms(rule, day, applyToMorning, applyToEvening);

            ApplyRotatingReadings(liturgicalYear, rule, day, applyToMorning, applyToEvening);

            ApplySetReadings(rule, day, applyToMorning, applyToEvening);
        }

        public void ApplyDayDescription(Rule rule, Day day)
        {

            if (rule.DayName != null)
            {
                day.DayDescription = rule.DayName;
            }
        }

        public void ApplyIsSeasonalTime(Rule rule, Day day)
        {
            if (rule.IsSeasonalTime != null)
            {
                day.IsSeasonalTime = rule.IsSeasonalTime;
            }
        }

        public void ApplyFeastOrSeasonType(Rule rule, Day day)
        {
            if (rule.FeastOrSeasonFlags != FeastOrSeasonType.None)
            {
                day.FeastOrSeasonType |= rule.FeastOrSeasonFlags;
            }
        }

        public void ApplyPsalms(Rule rule, Day day, bool applyToMorning, bool applyToEvening)
        {
            if (rule.HasMorningPsalms && applyToMorning)
            {
                day.MorningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + rule.MorningPsalmsMain;
            }

            if (rule.HasEveningPsalms && applyToEvening)
            {
                day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + rule.EveningPsalmsMain;
            }

        }

        public void ApplyRotatingReadings(LiturgicalYear rotatingReadingMapping, Rule rule, Day day, bool applyToMorning, bool applyToEvening)
        {
            if (!rule.HasRotatingReadings)
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


            if (applyToMorning)
            {
                // morning old testament
                var value = day.IsSeasonalTime.Value
                    ? rule.RotatingReadings[rotatingReadingMapping.MorningOldTestamentSeasonal]
                    : rule.RotatingReadings[rotatingReadingMapping.MorningOldTestamentOrdinary];

                day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = value;

                // morning new testament
                value = rule.RotatingReadings[rotatingReadingMapping.MorningNewTestament];
                day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = value;
            }

            if (applyToEvening)
            {
                // evening old testament
                var value = day.IsSeasonalTime.Value
                    ? rule.RotatingReadings[rotatingReadingMapping.EveningOldTestamentSeasonal]
                    : rule.RotatingReadings[rotatingReadingMapping.EveningOldTestamentOrdinary];
                day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = value;

                // evening new testament
                value = rule.RotatingReadings[rotatingReadingMapping.EveningNewTestament];
                day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = value;
            }
        }

        public void ApplySetReadings(Rule rule, Day day, bool applyToMorning, bool applyToEvening)
        {
            if (rule.MorningOldTestament != null && applyToMorning)
            {
                day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = rule.MorningOldTestament;
            }

            if (rule.MorningNewTestament != null && applyToMorning)
            {
                day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = rule.MorningNewTestament;
            }

            if (rule.EveningOldTestament != null && applyToEvening)
            {
                day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = rule.EveningOldTestament;
            }

            if (rule.EveningNewTestament != null && applyToEvening)
            {
                day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = rule.EveningNewTestament;
            }
        }

    }
}

#pragma warning restore CS8602 // Dereference of a possibly null reference.