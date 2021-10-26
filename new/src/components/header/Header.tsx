import { NavLink } from "react-router-dom";
import { styled, font } from "../../stitches.config";

const StyledNav = styled("nav", {
  height: "25px",
  marginBottom: "30px",
  marginLeft: "30px",
  fontFamily: "inter",
});

const StyledNavLink = styled("a", {
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

const Header = () => {
  font();

  return (
    <StyledNav>
      <StyledNavLink href="/">New Zealand Anglican Lectionary</StyledNavLink>{" "}
      {" | "}
      <StyledNavLink href="/settings">Settings</StyledNavLink>
      {" | "}
      <StyledNavLink href="/about">About</StyledNavLink>
    </StyledNav>
  );
};

export default Header;
