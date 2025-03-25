import { styled } from "@stitches/react";
import { IAvailableDates, IReadingsForDay, Theme } from "../../data/interfaces";
import Button from "../common/Button";
import Toggle from "../common/Toggle";
import Nav from "../common/Nav";
import Message from "../common/Message";
import Date from "../common/Date";
import ReadingsSection from "./ReadingsSection";

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
          dataLabel="yesterday"
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
          dataLabel="tomorrow"
        />
      </Nav>
      <Message time={theme === Theme.EVENING ? "Po" : "Ata"} />
      <Date
        dates={availableDates}
        currentDate={dateKey}
        setCurrentDate={updateDate}
      />
      <StyledSpan>{todaysReadings.calendar}</StyledSpan>

      <ReadingsSection
        theme={theme}
        todaysReadings={todaysReadings}
        audioTranslation={audioTranslation}
        readingTranslation={readingTranslation}
        setAudioTranslation={setAudioTranslation}
        setReadingTranslation={setReadingTranslation}
      />
    </>
  );
};

export default ReadingsPage;
