import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import styled from "styled-components";

const NavbarLogo = (props) => {
  return (
    <StyledContainer className="no-select">
      <Link to="/">
        <img src={logoImg} alt="logo" onClick={props.handleClick} />
      </Link>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: tomato; */

  & img {
    display: block;
    width: 180px;
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 992px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

export default NavbarLogo;
