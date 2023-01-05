import { IReadingsList } from "../../data/interfaces";
import { styled } from "../../stitches.config";
import Reading from "./Reading";

const StyledReadingsList = styled("ul", {
  margin: "50px 0 50px 0",
  flex: "1",
  padding: "0",
  listStyle: "none",
});

interface ReadingsListProps {
  readingsList: IReadingsList;
  readingTranslation: string;
}

const ReadingsList = ({ readingsList, readingTranslation }: ReadingsListProps) => {
  return (
    <StyledReadingsList>
      {readingsList.readings.map((reading, i) => {
        return <Reading key={i} reading={reading} readingTranslation={readingTranslation} />;
      })}
    </StyledReadingsList>
  );
};

export default ReadingsList;
