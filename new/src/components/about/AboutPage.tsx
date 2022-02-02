import { styled } from "../../stitches.config";
import { Link } from "../common/Link";
import BackLink from "../common/BackLink";

interface AboutPageProps {}

const StyledAbout = styled("div", {
  color: "$foreground",
  height: "100%"
});

const Highlight = styled("span", {
  //borderBottom: "2px dashed"
  backgroundColor: "$highlight",
  color: "black"
})

const AboutPage = (props: AboutPageProps) => {
  return (
    <StyledAbout>
      <BackLink/>

      <h1>About</h1>

      <p>
        This app is a cut-down digital-friendly version of <i>The Lectionary Te Maramataka</i>, available on the <Link href="http://www.anglican.org.nz/Resources/Lectionary-and-Worship">General Synod website</Link>.
      </p>

      <p>Made with aroha in Wellington by Isabel Anastasiadis &amp; Isaac Minogue.</p>

      <p>We'd love your feedback! You can either fill out this <Link href="https://docs.google.com/forms/d/e/1FAIpQLSckYvSTMfR3okNZcPsur7dX2WDzhhNOKVkQkxXQCphKaQjgzA/viewform"> Google Form</Link> to rate potential new features, or you can email us at feedback@lectionary.co.nz.</p>

      <h2 style={{marginTop: '50px'}}>Sources</h2>
      <p>
        <i>The Revised Common Lectionary</i> is copyright © the Consultation on
        Common Texts, 1992 and is reproduced with permission. 
      </p>
      <p>
        The Church of England&apos;s adapted form of The Revised Common Lectionary,
        published as the Principal Service Lectionary in <i>Common Worship:
        Services and Prayers for the Church of England</i> is copyright © The
        Archbishops&apos; Council of the Church of England, 1995, 1997 and is <Highlight>pending permission</Highlight>.
      </p>
      <p>
        <i>The Lectionary Te Maramataka</i>, used with permission, available <Link href="http://www.anglican.org.nz/Resources/Lectionary-and-Worship">here</Link> on the General Synod website.
      </p>
    </StyledAbout>
  );
};

export default AboutPage;
