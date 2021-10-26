import { styled } from "../../stitches.config";

interface AboutPageProps {}

const StyledAbout = styled("div", {
  color: "$foreground",
});

const AboutPage = (props: AboutPageProps) => {
  return (
    <StyledAbout>
      <h1>About Page!!</h1>
    </StyledAbout>
  );
};

export default AboutPage;
