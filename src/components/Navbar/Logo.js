import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import StyledNavbar from "./style";

const Logo = (props) => {
  return (
    <StyledNavbar.Logo className="no-select">
      <Link to="/">
        <img src={logoImg} alt="logo" onClick={props.handleClick} />
      </Link>
    </StyledNavbar.Logo>
  );
};

export default Logo;
