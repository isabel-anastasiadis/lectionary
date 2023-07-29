using ReadingsBuilder.Model;
using ReadingsBuilder.Data.Result;
using ReadingsBuilder.Model.Result;


#pragma warning disable CS8602 // Dereference of a possibly null reference.
namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public class RuleApplier : IRuleApplier
    {
        private readonly ILiturgicalYearFactory _liturgicalYearFactory;

        public RuleApplier(ILiturgicalYearFactory liturgicalYearFactory)
        {
            _liturgicalYearFactory = liturgicalYearFactory;
        }

        public void ApplyRuleToDay(RuleData ruleData, Day day, ReadingsOptionType optionType = default)
        {
            var liturgicalYear = _liturgicalYearFactory.Get(day.Date);

            if (liturgicalYear == null)
            {
                throw new ArgumentException($"There was no RotatingReadingMapping returned for date '{day.Date}'");
            }

            InitialiseOptionTwoIfApplicable(ruleData, day, optionType);

            ApplyDayDescription(ruleData, day, optionType);

            ApplyEveningDescription(ruleData, day, optionType);

            ApplyIsSeasonalTime(ruleData, day); // NOTE: this needs to happen before rotating readings

            ApplyFeastOrSeasonType(ruleData, day); 

            ApplyPsalms(ruleData, day, optionType);

            ApplyRotatingReadings(liturgicalYear, ruleData, day);

            ApplySetReadings(ruleData, day, optionType);

        }

        private void InitialiseOptionTwoIfApplicable(RuleData ruleData, Day day, ReadingsOptionType optionType) 
        {
            if (optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoType = optionType;
                day.EveningReadings.OptionTwo = new EveningReadings();
            }
        }

        public void ApplyDayDescription(RuleData ruleData, Day day, ReadingsOptionType optionType)
        {

            if (ruleData.DayName != null)
            {
                day.DayDescription = ruleData.DayName;
            }
        }

        public void ApplyEveningDescription(RuleData ruleData, Day day, ReadingsOptionType optionType)
        {

            if (ruleData.EveningName != null && optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoDescription = ruleData.EveningName;
            }
        }

        public void ApplyIsSeasonalTime(RuleData ruleData, Day day)
        {
            if (ruleData.IsSeasonalTime != null)
            {
                day.IsSeasonalTime = ruleData.IsSeasonalTime;
            }
        }

        public void ApplyFeastOrSeasonType(RuleData ruleData, Day day)
        {
            if (ruleData.FeastOrSeasonFlags != FeastOrSeasonType.None)
            {
                day.FeastOrSeasonType |= ruleData.FeastOrSeasonFlags;
            }
        }

        public void ApplyPsalms(RuleData ruleData, Day day, ReadingsOptionType optionType)
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

        public void ApplyRotatingReadings(LiturgicalYear rotatingReadingMapping, RuleData ruleData, Day day)
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

        public void ApplySetReadings(RuleData ruleData, Day day, ReadingsOptionType optionType)
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