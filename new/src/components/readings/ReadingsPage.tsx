import Button from "../common/Button";
import Toggle from "../common/Toggle";
import Nav from "../common/Nav";
import Message from "../common/Message";
import Date from "../common/Date";
import ReadingsList from "./ReadingsList";
import Actions from "./Actions";
import { IAvailableDates, IReadingsForDay, Theme } from "../../data/interfaces";
import { styled } from "@stitches/react";

const StyledSpan = styled('span', {
  color: '$foreground',
  paddingLeft: "5px"
});

interface ReadingsPageProps {
  theme: Theme;
  dateKey: string;
  availableDates: IAvailableDates;
  todaysReadings: IReadingsForDay;
  audioTranslation: string,
  readingTranslation: string,
  setAudioTranslation(translation: string): void,
  setReadingTranslation(translation: string): void
  yesterdayOnClick(): void;
  tomorrowOnClick(): void;
  updateDate(dateKey: string): void;
  updateTheme(theme: Theme): void;
}

const ReadingsPage = ({
  theme,
  dateKey,
  availableDates,
  todaysReadings,
  audioTranslation,
  readingTranslation,
  setAudioTranslation,
  setReadingTranslation,
  yesterdayOnClick,
  tomorrowOnClick,
  updateDate,
  updateTheme,
}: ReadingsPageProps) => {
  return (
    <>
      <Nav>
        <Button
          shape="circ"
          buttonStyle="secondary"
          icon={"arrow"}
          iconRotate={"90"}
          onClick={yesterdayOnClick}
        />
        <Toggle
          options={[
            { value: Theme.MORNING, content: "Morning" },
            { value: Theme.EVENING, content: "Evening" },
          ]}
          selected={theme}
          onChange={updateTheme}
        />
        <Button
          shape="circ"
          icon={"arrow"}
          iconRotate={"-90"}
          onClick={tomorrowOnClick}
        />
      </Nav>
      <Message time={theme === Theme.EVENING ? "Po" : "Ata"} />
      <Date
        dates={availableDates}
        currentDate={dateKey}
        setCurrentDate={updateDate}
      />
      <StyledSpan>{todaysReadings.calendar}</StyledSpan>
      <ReadingsList
        readingsList={
          theme === Theme.MORNING
            ? todaysReadings.morning
            : todaysReadings.evening
        }
        readingTranslation={readingTranslation}
      />
      <Actions readings={
        theme === Theme.MORNING
            ? todaysReadings.morning
            : todaysReadings.evening
        }
        audioTranslation={audioTranslation}
        readingTranslation={readingTranslation}
        setAudioTranslation={setAudioTranslation}
        setReadingTranslation={setReadingTranslation}
      />
    </>
  );
};

export default ReadingsPage;
