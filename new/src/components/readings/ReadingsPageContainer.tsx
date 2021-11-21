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
  const [todaysReadings, setTodaysReadings] = useState(
    getReadingsForDay(dateKey)
  );

  function handleYesterdayClicked(): void {
    const newDateKey = getYesterdaysDateKey(dateKey);
    updateDateKey(newDateKey);
  }

  function handleTomorrowClicked(): void {
    const newDateKey = getTomorrowsDateKey(dateKey);
    updateDateKey(newDateKey);
  }

  function handleDateUpdated(dateKey: string): void {
    updateDateKey(dateKey);
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
