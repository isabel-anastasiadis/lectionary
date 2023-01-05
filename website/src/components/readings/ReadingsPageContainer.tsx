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

  const [audioTranslation, setAudioTranslation ] = useState(() => {
    const saved = localStorage.getItem("nz_anglican_lectionary.audio_translation");
    return saved !== null ? JSON.parse(saved) : AUDIO_TRANSLATIONS[0].value
  });

  const [readingTranslation, setReadingTranslation ] = useState(() => {
    const saved = localStorage.getItem("nz_anglican_lectionary.reading_translation");
    return saved !== null ? JSON.parse(saved) : READING_TRANSLATIONS[0].value
  });

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

  function saveAudioTranslation(audioTranslation: string): void {
    localStorage.setItem("nz_anglican_lectionary.audio_translation", JSON.stringify(audioTranslation));
    setAudioTranslation(audioTranslation);
  }

  function saveReadingTranslation(readingTranslation: string): void {
    localStorage.setItem("nz_anglican_lectionary.reading_translation", JSON.stringify(readingTranslation));
    setReadingTranslation(readingTranslation);
  }

  return (
    <ReadingsPage
      theme={theme}
      dateKey={dateKey}
      availableDates={availableDates}
      todaysReadings={todaysReadings}
      audioTranslation={audioTranslation}
      readingTranslation={readingTranslation}
      setAudioTranslation={saveAudioTranslation}
      setReadingTranslation={saveReadingTranslation}
      updateTheme={updateTheme}
      updateDate={updateDateKey}
      yesterdayOnClick={handleYesterdayClicked}
      tomorrowOnClick={handleTomorrowClicked}
    />
  );
};

export default ReadingsPageContainer;
