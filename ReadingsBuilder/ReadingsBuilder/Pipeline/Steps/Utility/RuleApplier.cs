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

        public void ApplyRuleToDay(Rule Rules, Day day, ReadingsOptionType optionType = default)
        {
            var liturgicalYear = _liturgicalYearFactory.Get(day.Date);

            if (liturgicalYear == null)
            {
                throw new ArgumentException($"There was no liturgical year returned for date '{day.Date}'");
            }

            InitialiseOptionTwoIfApplicable(Rules, day, optionType);

            ApplyDayDescription(Rules, day, optionType);

            ApplyEveningDescription(Rules, day, optionType);

            ApplyIsSeasonalTime(Rules, day); // NOTE: this needs to happen before rotating readings

            ApplyFeastOrSeasonType(Rules, day); 

            ApplyPsalms(Rules, day, optionType);

            ApplyRotatingReadings(liturgicalYear, Rules, day);

            ApplySetReadings(Rules, day, optionType);

        }

        private void InitialiseOptionTwoIfApplicable(Rule Rules, Day day, ReadingsOptionType optionType) 
        {
            if (optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoType = optionType;
                day.EveningReadings.OptionTwo = new EveningReadings();
            }
        }

        public void ApplyDayDescription(Rule Rules, Day day, ReadingsOptionType optionType)
        {

            if (Rules.DayName != null)
            {
                day.DayDescription = Rules.DayName;
            }
        }

        public void ApplyEveningDescription(Rule Rules, Day day, ReadingsOptionType optionType)
        {

            if (Rules.EveningName != null && optionType == ReadingsOptionType.EveningBeforeFestival)
            {
                day.EveningReadings.OptionTwoDescription = Rules.EveningName;
            }
        }

        public void ApplyIsSeasonalTime(Rule Rules, Day day)
        {
            if (Rules.IsSeasonalTime != null)
            {
                day.IsSeasonalTime = Rules.IsSeasonalTime;
            }
        }

        public void ApplyFeastOrSeasonType(Rule Rules, Day day)
        {
            if (Rules.FeastOrSeasonFlags != FeastOrSeasonType.None)
            {
                day.FeastOrSeasonType |= Rules.FeastOrSeasonFlags;
            }
        }

        public void ApplyPsalms(Rule Rules, Day day, ReadingsOptionType optionType)
        {
            if (Rules.HasMorningPsalms)
            {
                day.MorningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + Rules.MorningPsalmsMain;
            }

            if (Rules.HasEveningPsalms)
            {
                day.EveningReadings.OptionOne.Psalms.OptionOne.RawString = "Psalm " + Rules.EveningPsalmsMain;
            }

        }

        public void ApplyRotatingReadings(LiturgicalYear rotatingReadingMapping, Rule Rules, Day day)
        {
            if (!Rules.HasRotatingReadings)
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
                ? Rules.RotatingReadings[rotatingReadingMapping.MorningOldTestamentSeasonal]
                : Rules.RotatingReadings[rotatingReadingMapping.MorningOldTestamentOrdinary];

            day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = value;


            // morning new testament
            value = Rules.RotatingReadings[rotatingReadingMapping.MorningNewTestament];
            day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = value;

            // evening old testament
            value = day.IsSeasonalTime.Value
                ? Rules.RotatingReadings[rotatingReadingMapping.EveningOldTestamentSeasonal]
                : Rules.RotatingReadings[rotatingReadingMapping.EveningOldTestamentOrdinary];
            day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = value;

            // evening new testament
            value = Rules.RotatingReadings[rotatingReadingMapping.EveningNewTestament];
            day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = value;


        }

        public void ApplySetReadings(Rule Rules, Day day, ReadingsOptionType optionType)
        {
            if (Rules.MorningOldTestament != null)
            {
                day.MorningReadings.OptionOne.OldTestament.OptionOne.RawString = Rules.MorningOldTestament;
            }

            if (Rules.MorningNewTestament != null)
            {
                day.MorningReadings.OptionOne.NewTestament.OptionOne.RawString = Rules.MorningNewTestament;
            }

            if (Rules.EveningOldTestament != null)
            {
                day.EveningReadings.OptionOne.OldTestament.OptionOne.RawString = Rules.EveningOldTestament;
            }

            if (Rules.EveningNewTestament != null)
            {
                day.EveningReadings.OptionOne.NewTestament.OptionOne.RawString = Rules.EveningNewTestament;
            }
        }

    }
}

#pragma warning restore CS8602 // Dereference of a possibly null reference.