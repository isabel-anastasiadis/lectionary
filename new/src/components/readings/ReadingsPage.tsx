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
import { getDate } from "date-fns";

const Wrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
  padding: "30px",
});

const dateList = [
  "Wednesday, October 13, 2021",
  "Thursday, October 14, 2021",
  "Friday, October 15, 2021",
];

const ReadingsPage = () => {
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [todaysReadings, setTodaysReadings] = useState(
    getReadingsForDay(getTodaysDateKey())
  );
  const dateList = getDatesList();
  font();

  function handleYesterdayClicked(): void {}

  function handleTomorrowClicked(): void {}

  function handleDateUpdated(): void {}

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
        currentDate={dateList[0]}
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
