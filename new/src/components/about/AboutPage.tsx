import { styled } from "../../stitches.config";
import {Link} from "../common/Link";
import Footer from "../footer/Footer";

interface AboutPageProps {}

const StyledAbout = styled("div", {
  color: "$foreground",
  height: "100%",
  display: "flex",
  flexDirection: "column"
});

const Content = styled("div", {
  flex: 1
});

const Highlight = styled("span", {
  borderBottom: "2px dashed"
})

const AboutPage = (props: AboutPageProps) => {
  return (
    <StyledAbout>
      <Content>
        <h1>About</h1>

        <p>
          This app is a cut-down digital-friendly version of <i>The Lectionary Te Maramataka</i>, available on the <Link href="http://www.anglican.org.nz/Resources/Lectionary-and-Worship">General Synod website</Link>.
        </p>

        <p>Made with aroha in Wellington by Isabel Anastasiadis &amp; Isaac Minogue &hearts;</p>

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
      </Content>
      <Footer links={ [{to: "/", label: "Back"}] }/>
    </StyledAbout>
  );
};

export default AboutPage;
