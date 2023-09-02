using ReadingsBuilder.Model;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Model.Result;


#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class RuleApplier : IRuleApplier
    {
        public void ApplyRuleToDay(Rule rule, Day day, LiturgicalYear liturgicalYear, ReadingsOptionType optionType = default)
        {
            InitialiseOptionTwoIfApplicable(rule, day, optionType);

            ApplyDayDescription(rule, day, optionType);

            ApplyEveningDescription(rule, day, optionType);

            ApplyIsSeasonalTime(rule, day); // NOTE: this needs to happen before rotating readings

            ApplyFeastOrSeasonType(rule, day); 

            ApplyPsalms(rule, day, optionType);

            ApplyRotatingReadings(liturgicalYear, rule, day);

            ApplySetReadings(rule, day, optionType);
        }

        private void InitialiseOptionTwoIfApplicable(Rule rule, Day day, ReadingsOptionType optionType) 
        {
            if (optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoType = optionType;
                day.EveningReadings.OptionTwo = new EveningReadings();
            }
        }

        public void ApplyDayDescription(Rule rule, Day day, ReadingsOptionType optionType)
        {

            if (rule.DayName != null)
            {
                day.DayDescription = rule.DayName;
            }
        }

        public void ApplyEveningDescription(Rule rule, Day day, ReadingsOptionType optionType)
        {

            if (rule.EveningName != null && optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoDescription = rule.EveningName;
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

        public void ApplyPsalms(Rule rule, Day day, ReadingsOptionType optionType)
        {
            if (rule.HasMorningPsalms)
            {
                day.MorningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + rule.MorningPsalmsMain;
            }

            if (rule.HasEveningPsalms)
            {
                day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + rule.EveningPsalmsMain;
            }

        }

        public void ApplyRotatingReadings(LiturgicalYear rotatingReadingMapping, Rule rule, Day day)
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

            // morning old testament
            var value = day.IsSeasonalTime.Value
                ? rule.RotatingReadings[rotatingReadingMapping.MorningOldTestamentSeasonal]
                : rule.RotatingReadings[rotatingReadingMapping.MorningOldTestamentOrdinary];

            day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = value;


            // morning new testament
            value = rule.RotatingReadings[rotatingReadingMapping.MorningNewTestament];
            day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = value;

            // evening old testament
            value = day.IsSeasonalTime.Value
                ? rule.RotatingReadings[rotatingReadingMapping.EveningOldTestamentSeasonal]
                : rule.RotatingReadings[rotatingReadingMapping.EveningOldTestamentOrdinary];
            day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = value;

            // evening new testament
            value = rule.RotatingReadings[rotatingReadingMapping.EveningNewTestament];
            day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = value;


        }

        public void ApplySetReadings(Rule rule, Day day, ReadingsOptionType optionType)
        {
            if (rule.MorningOldTestament != null)
            {
                day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = rule.MorningOldTestament;
            }

            if (rule.MorningNewTestament != null)
            {
                day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = rule.MorningNewTestament;
            }

            if (rule.EveningOldTestament != null)
            {
                day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = rule.EveningOldTestament;
            }

            if (rule.EveningNewTestament != null)
            {
                day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = rule.EveningNewTestament;
            }
        }

    }
}

#pragma warning restore CS8602 // Dereference of a possibly null reference.