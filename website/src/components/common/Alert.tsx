
import { styled } from "@stitches/react";

// we need the width of the FlexibleSelect to not be 100% because of flex
const StyledParagraph = styled("p", {
    color: "black",
    backgroundColor: "Pink",
    padding: "1rem"
});

interface AlertProps {
  message: string;
}

const Alert = ({ message }: AlertProps) => {

  return (
    <StyledParagraph>
      {message}
    </StyledParagraph>
  );
};

export default Alert;
