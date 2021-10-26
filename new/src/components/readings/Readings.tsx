import { IReadingsList } from "../../api/data";
import { styled } from "../../stitches.config";
import Reading from "./Reading";

const StyledReadings = styled("ul", {
  margin: "50px 0 0 0",
  flex: "1",
  padding: "0",
  listStyle: "none",
});

interface ReadingsProps {
  readingsList: IReadingsList;
}

const Readings = ({ readingsList }: ReadingsProps) => {
  return (
    <StyledReadings>
      {readingsList.readings.map((reading, i) => {
        return <Reading key={i} text={reading} link={"www.google.com"} />;
      })}
    </StyledReadings>
  );
};

export default Readings;
