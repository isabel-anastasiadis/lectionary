
import { styled } from "@stitches/react";
import { IAvailableDates } from "../../data/interfaces";
import FlexibleSelect from "./FlexibleSelect";

// we need the width of the FlexibleSelect to not be 100% because of flex
const Wrapper = styled("div", {


});

interface DateProps {
  dates: IAvailableDates;
  currentDate: string;
  setCurrentDate: (dateKey: string) => void;
}

const Date = ({ dates, currentDate, setCurrentDate }: DateProps) => {
  const dateOptions = Object
    .keys(dates)
    .map(key => {
      return {value: key, text: dates[key]};
    });

  return (
    <Wrapper>
      <FlexibleSelect 
        options={dateOptions} 
        newExternalValue={currentDate} 
        onChange={setCurrentDate} 
        truncatedDisplayText={false}
        dataContext="date"/>
    </Wrapper>
  );
};

export default Date;
