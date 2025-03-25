import { IReadingsList } from "../../data/interfaces";
import { styled } from "../../stitches.config";
import Reading from "./Reading";

const StyledReadingsList = styled("ul", {
  flex: "1",
  padding: "0",
  listStyle: "none",
  margin: "0"
});

interface ReadingsListProps {
  readingsList: IReadingsList;
  readingTranslation: string;
}

const ReadingsList = ({ readingsList, readingTranslation }: ReadingsListProps) => {

  return (
    <StyledReadingsList>
      {
        readingsList.readings.map((reading, i) => {
          return <Reading key={i} reading={reading} readingTranslation={readingTranslation} dataLabel={"reading_" + i} />;
        })
      }
    </StyledReadingsList>
  );
};

export default ReadingsList;
