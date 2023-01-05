import { styled } from "../../stitches.config";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled("nav", {
  color: "$foreground",
  height: "25px",
  fontSize: "14px",
  fontFamily: "inter",
  display: "flex",
  justifyContent: "space-between",
  opacity: 0.6,
  margin: "30px",
  marginTop: 0
});

const StyledNavLink = styled(Link, {
  // NOTE: has to be a react Link or it will refresh the app each route change
  color: "$foreground",
  textDecoration: "none",
  fontSize: "14px",
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

interface IFooterProps {
  links: Array<{to: string, label: string}>
}

const Footer = ({links}: IFooterProps) => {
  const location = useLocation().pathname;

  return (
    <StyledNav>
      New Zealand Anglican Lectionary

      {links.map((link, i) => {
        const linkIsActive = location === link.to;

        return <StyledNavLink to={linkIsActive ? "/" : link.to }>{linkIsActive ? "Back" : link.label}</StyledNavLink>
      })}
      
    </StyledNav>
  );
};

export default Footer;
