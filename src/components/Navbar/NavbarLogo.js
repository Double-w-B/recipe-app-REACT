import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.jpg";
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
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 4rem;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: var(--primary-shadow);
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
