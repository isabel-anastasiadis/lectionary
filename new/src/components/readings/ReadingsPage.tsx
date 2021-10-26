import { styled, dark, font } from "../../stitches.config";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import Toggle from "../common/Toggle";
import Nav from "../common/Nav";
import Message from "../common/Message";
import Date from "../common/Date";
import Readings from "./Readings";
import Header from "../header/Header";

import {
  getReadingsForDay,
  getAvailableDates,
} from "../../data/readingsService";
import {
  getTodaysDateKey,
  getYesterdaysDateKey,
  getTomorrowsDateKey,
} from "../../data/dateKeyService";

const Wrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
  padding: "30px",
  marginBottom: "-55px", // the header height
});

const availableDates = getAvailableDates();

const ReadingsPage = () => {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [dateKey, setDateKey] = useState(getTodaysDateKey());
  const [todaysReadings, setTodaysReadings] = useState(
    getReadingsForDay(dateKey)
  );

  font();

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
    <>
      <Wrapper className={timeOfDay === "evening" ? dark : ""}>
        <Nav>
          <Button
            shape="circ"
            icon={"arrow"}
            iconRotate={"90"}
            onClick={handleYesterdayClicked}
          />
          <Toggle
            options={[
              { value: "morning", content: "Morning" },
              { value: "evening", content: "Evening" },
            ]}
            selected={timeOfDay}
            onChange={setTimeOfDay}
          />
          <Button
            shape="circ"
            icon={"arrow"}
            iconRotate={"-90"}
            onClick={handleTomorrowClicked}
          />
        </Nav>
        <Message time={timeOfDay === "evening" ? "Po" : "Ata"} />
        <Date
          dates={availableDates}
          currentDate={dateKey}
          setCurrentDate={handleDateUpdated}
        />
        <Readings
          readingsList={
            timeOfDay === "morning"
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
