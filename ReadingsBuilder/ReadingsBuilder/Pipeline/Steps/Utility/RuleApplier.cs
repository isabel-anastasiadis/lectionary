using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;


#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class RuleApplier : IRuleApplier
    {
        public void ApplyRuleToDay(Rule rule, Day day, LiturgicalYear liturgicalYear)
        {
            // NOTE: most of the time, the higher priority things get applied later, but sometimes a higher step
            // applies a rule that is trumped by one that has already been applied.
            //
            // Also, evening can be different to morning (because of 1st EP of ...).
            //
            // Eg. 2022-06-11
            //   1st EP of Trinity Sunday(a principal feast) is applied by Step 8
            //   Feast of St Barnabas is applied in Step 12
            // In this case, we only want to apply feast of St Barnabas readings to the morning and not the evening.
            var applyToMorning = CanApplyTo(rule, day, "Morning");
            var applyToEvening = CanApplyTo(rule, day, "Evening");

            if (!applyToMorning && !applyToEvening)
            {
                return;
            }

            ApplyDayDescription(rule, day);
            ApplyIsSeasonalTime(rule, day); // NOTE: this needs to happen before rotating readings

            ApplyFeastOrSeasonType(rule, day, applyToEvening);

            ApplyPsalms(rule, day, applyToMorning, applyToEvening);

            ApplyRotatingReadings(liturgicalYear, rule, day, applyToMorning, applyToEvening);

            ApplySetReadings(rule, day, applyToMorning, applyToEvening);
        }

        private bool CanApplyTo(Rule rule, Day day, string timeOfDay)
        {
            var isEvening = timeOfDay == "Evening";

            int rulePriority = GetPriority(rule.FeastOrSeasonFlags, isEvening);
            int existingReadingsPriority = GetPriority(day.FeastOrSeasonType, isEvening);

            var existingReadingsTrumpCurrentRule = existingReadingsPriority > rulePriority;

            return !existingReadingsTrumpCurrentRule;
        }

        private int GetPriority(FeastOrSeasonType flags, bool isEvening)
        {
            int priority = 0;

            if (flags.HasFlag(FeastOrSeasonType.Festival))
            {
                priority = 1;
            }

            if (isEvening && flags.HasFlag(FeastOrSeasonType.EveningBeforeFestival))
            {
                priority = 1;
            }

            if (flags.HasFlag(FeastOrSeasonType.PrincipalFeast))
            {
                priority = 2;
            }

            if (flags.HasFlag(FeastOrSeasonType.PrincipalHolyDay))
            {
                priority = 2;
            }

            if (isEvening && flags.HasFlag(FeastOrSeasonType.EveningBeforePrincipalFeast))
            {
                priority = 2;
            }

            if (isEvening && flags.HasFlag(FeastOrSeasonType.EveningBeforePrincipalHolyDay))
            {
                priority = 2;
            }

            return priority;
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

        public void ApplyFeastOrSeasonType(Rule rule, Day day, bool applyToEvening)
        {
            if (rule.FeastOrSeasonFlags == FeastOrSeasonType.None)
            {
                return;
            }

            var flagsToAdd = rule.FeastOrSeasonFlags;
            if (!applyToEvening)
            {
                flagsToAdd &= ~FeastOrSeasonType.EveningBeforeFestival;
                flagsToAdd &= ~FeastOrSeasonType.EveningBeforePrincipalFeast;
                flagsToAdd &= ~FeastOrSeasonType.EveningBeforePrincipalHolyDay;
            }

            day.FeastOrSeasonType |= flagsToAdd;
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