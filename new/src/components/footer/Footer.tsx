import { styled } from "../../stitches.config";
import { Link } from "react-router-dom";

const StyledNav = styled("nav", {
  color: "$foreground",
  height: "25px",
  marginBottom: "30px",
  marginLeft: "30px",
  fontFamily: "inter",
});

const StyledNavLink = styled(Link, {
  // NOTE: has to be a react Link or it will refresh the app each route change
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
