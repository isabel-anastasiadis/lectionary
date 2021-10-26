import { useEffect, useState } from "react";
import {
  getReadingsForDay,
  getAvailableDates,
} from "../../data/readingsService";
import {
  getTodaysDateKey,
  getYesterdaysDateKey,
  getTomorrowsDateKey,
} from "../../data/dateKeyService";
import { Theme } from "../../data/interfaces";
import ReadingsPage from "./ReadingsPage";

const availableDates = getAvailableDates();

interface ReadingsPageContainerProps {
  updateTheme(theme: Theme): void;
  theme: Theme;
}

const ReadingsPageContainer = ({
  updateTheme,
  theme,
}: ReadingsPageContainerProps) => {
  const [dateKey, setDateKey] = useState(getTodaysDateKey());
  const [todaysReadings, setTodaysReadings] = useState(
    getReadingsForDay(dateKey)
  );

  function handleYesterdayClicked(): void {
    const newDateKey = getYesterdaysDateKey(dateKey);
    setDateKey(newDateKey);
  }

  function handleTomorrowClicked(): void {
    const newDateKey = getTomorrowsDateKey(dateKey);
    setDateKey(newDateKey);
  }

  function handleDateUpdated(dateKey: string): void {
    setDateKey(dateKey);
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
      updateTheme={updateTheme}
      updateDate={handleDateUpdated}
      yesterdayOnClick={handleYesterdayClicked}
      tomorrowOnClick={handleTomorrowClicked}
    />
  );
};

export default ReadingsPageContainer;
