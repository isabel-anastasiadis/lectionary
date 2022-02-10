import { useEffect, useState } from "react";
import {
  getReadingsForDay,
  getAvailableDates,
} from "../../data/readingsService";
import {
  getYesterdaysDateKey,
  getTomorrowsDateKey,
} from "../../data/dateKeyService";
import { Theme } from "../../data/interfaces";
import ReadingsPage from "./ReadingsPage";
import { AUDIO_TRANSLATIONS, READING_TRANSLATIONS } from "../../data/urls";

const availableDates = getAvailableDates();

interface ReadingsPageContainerProps {
  theme: Theme;
  updateTheme(theme: Theme): void;
  dateKey: string;
  updateDateKey(dateKey: string): void;
}

const ReadingsPageContainer = ({
  theme,
  updateTheme,
  dateKey,
  updateDateKey,
}: ReadingsPageContainerProps) => {

  const defaultAudioTranslation = AUDIO_TRANSLATIONS[0].value;
  const defaultReadingTranslation = READING_TRANSLATIONS[0].value;
  const [audioTranslation, setAudioTranslation ] = useState(defaultAudioTranslation);
  const [readingTranslation, setReadingTranslation ] = useState(defaultReadingTranslation);
  const [todaysReadings, setTodaysReadings] = useState(getReadingsForDay(dateKey));

  function handleYesterdayClicked(): void {
    const newDateKey = getYesterdaysDateKey(dateKey);
    updateDateKey(newDateKey);
  }

  function handleTomorrowClicked(): void {
    const newDateKey = getTomorrowsDateKey(dateKey);
    updateDateKey(newDateKey);
  }

  useEffect(() => {
    setTodaysReadings(getReadingsForDay(dateKey));
  }, [dateKey]);

  return (
    <ReadingsPage
      theme={theme}
      dateKey={dateKey}
      availableDates={availableDates}
      todaysReadings={todaysReadings}
      audioTranslation={audioTranslation}
      readingTranslation={readingTranslation}
      setAudioTranslation={setAudioTranslation}
      setReadingTranslation={setReadingTranslation}
      updateTheme={updateTheme}
      updateDate={updateDateKey}
      yesterdayOnClick={handleYesterdayClicked}
      tomorrowOnClick={handleTomorrowClicked}
    />
  );
};

export default ReadingsPageContainer;
