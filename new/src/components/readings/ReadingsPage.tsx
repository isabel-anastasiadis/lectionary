import { styled, dark, font } from "../../stitches.config";
import Button from "../common/Button";
import Toggle from "../common/Toggle";
import Nav from "../common/Nav";
import Message from "../common/Message";
import Date from "../common/Date";
import ReadingsList from "./ReadingsList";
import Header from "../header/Header";
import { IAvailableDates, IReadingsForDay, Theme } from "../../data/interfaces";

const Wrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
  padding: "30px",
  marginBottom: "-55px", // the header height
});

interface ReadingsPageProps {
  theme: Theme;
  dateKey: string;
  availableDates: IAvailableDates;
  todaysReadings: IReadingsForDay;
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
  yesterdayOnClick,
  tomorrowOnClick,
  updateDate,
  updateTheme,
}: ReadingsPageProps) => {
  font();

  return (
    <>
      <Wrapper className={theme === Theme.EVENING ? dark : ""}>
        <Nav>
          <Button
            shape="circ"
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
        <ReadingsList
          readingsList={
            theme === Theme.MORNING
              ? todaysReadings.morning
              : todaysReadings.evening
          }
        />
      </Wrapper>
      <Header />
    </>
  );
};

export default ReadingsPage;
