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
          let dataLabel = '';

          switch(i) {
            case 0:
              dataLabel = 'reading_psalm'
              break;
            case 1:
              dataLabel = 'reading_old_testament'
              break;
            case 2:
              dataLabel = 'reading_new_testament'
              break;
            case 3:
              dataLabel = 'reading_gospel'
          }

          return <Reading key={i} reading={reading} readingTranslation={readingTranslation} dataLabel={dataLabel} />;
        })
      }
    </StyledReadingsList>
  );
};

export default ReadingsList;
