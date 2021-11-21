import { IReadingsList } from "../../data/interfaces";
import { styled } from "../../stitches.config";
import Reading from "./Reading";

const StyledReadingsList = styled("ul", {
  margin: "50px 0 0 0",
  flex: "1",
  padding: "0",
  listStyle: "none",
});

interface ReadingsListProps {
  readingsList: IReadingsList;
}

const ReadingsList = ({ readingsList }: ReadingsListProps) => {
  return (
    <StyledReadingsList>
      {readingsList.readings.map((reading, i) => {
        return <Reading key={i} text={reading} link={"www.google.com"} />;
      })}
    </StyledReadingsList>
  );
};

export default ReadingsList;
