import { styled } from "@stitches/react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { DefaultLinkStyles } from "./Link";


const StyledLink = styled(Link, DefaultLinkStyles, {
    fontWeight: '400',
    fontSize: '20px',
    display: "flex",
    alignItems: "center",
    gap: "3px"
  });

const BackLink = () => {
  return (<StyledLink to={"/"} data-category="navigation" data-action="click" data-label="back"><Icon name="chevron" rotate="90"></Icon>Back</StyledLink>);
}

export default BackLink;
