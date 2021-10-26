import { styled, dark, font } from "../../stitches.config";
import { useState } from "react";
import Button from "../common/Button";
import Toggle from "../common/Toggle";
import Nav from "../common/Nav";
import Message from "../common/Message";
import Date from "../common/Date";
import Readings from "./Readings";
import { getReadingsForDay } from "../../api/readingsService";
import { getTodaysDateKey, getDatesList } from "../../api/dateKeyService";

const Wrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
  padding: "30px",
});

const ReadingsPage = () => {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [dateKey] = useState(getTodaysDateKey());
  const [todaysReadings] = useState(getReadingsForDay(dateKey));
  const [dateList] = useState(getDatesList());
  font();

  function handleYesterdayClicked(): void {}

  function handleTomorrowClicked(): void {}

  function handleDateUpdated(dateKey: string): void {}

  return (
    <Wrapper className={timeOfDay === "evening" ? dark : ""}>
      <Nav>
        <Button
          shape="circ"
          icon={"arrow"}
          iconRotate={"90"}
          onClick={() => {
            console.log("Yesterday clicked");
          }}
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
          onClick={() => {
            console.log("Tomorrow clicked");
          }}
        />
      </Nav>
      <Message time={timeOfDay === "evening" ? "Po" : "Ata"} />
      <Date
        dates={dateList}
        currentDate={dateKey}
        setCurrentDate={() => {
          console.log("Date updated");
        }}
      />
      <Readings
        readingsList={
          timeOfDay === "morning"
            ? todaysReadings.morning
            : todaysReadings.evening
        }
      />
    </Wrapper>
  );
};

export default ReadingsPage;
