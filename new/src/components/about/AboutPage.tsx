import { styled } from "../../stitches.config";
import {Link} from "../common/Link";

interface AboutPageProps {}

const StyledAbout = styled("div", {
  color: "$foreground",
});

const Highlight = styled("span", {
  borderBottom: "2px dashed"
})

const AboutPage = (props: AboutPageProps) => {
  return (
    <StyledAbout>
      <h1>About</h1>

      <p>
        This app is a cut-down digital-friendly version of <i>The Lectionary Te Maramataka</i>, available on the <Link href="http://www.anglican.org.nz/Resources/Lectionary-and-Worship">General Synod website</Link>.
      </p>

      <p>Made with aroha in Wellington by Isabel Anastasiadis &amp; Isaac Minogue &hearts;</p>

      <h2>Sources</h2>
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
