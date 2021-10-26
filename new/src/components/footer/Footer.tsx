import { styled, font } from "../../stitches.config";
import { Link } from "react-router-dom";

const StyledNav = styled("nav", {
  color: "$foreground",
  height: "25px",
  marginBottom: "30px",
  marginLeft: "30px",
  fontFamily: "inter",
});

const StyledNavLink = styled(Link, {
  color: "$foreground",
  textDecoration: "none",
  lineHeight: "25px",
  transition: "all 0.1s ease",
  outline: "none",
  "&:hover, &:focus": {
    opacity: "0.8",
  },
  "&:active": {
    opacity: "0.6",
  },
});

const Footer = () => {
  font();

  return (
    <StyledNav>
      <StyledNavLink to="/">New Zealand Anglican Lectionary</StyledNavLink>{" "}
      {" | "}
      <StyledNavLink to="/settings">Settings</StyledNavLink>
      {" | "}
      <StyledNavLink to="/about">About</StyledNavLink>
    </StyledNav>
  );
};

export default Footer;
