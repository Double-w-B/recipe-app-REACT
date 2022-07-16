import React from "react";
import styled from "styled-components";
import InfoIcon from "../../images/info.png";
import { AppContext } from "../../context/context";

const NavbarInfoIcon = ({ showInfo, setShowInfo }) => {
  const { currentPath, queryPath } = React.useContext(AppContext);

  const firstPath = `/recipes/${queryPath}`;
  const secondPath = `/savedrecipes`;

  return (
    (currentPath === firstPath || currentPath === secondPath) && (
      <StyledContainer className={showInfo ? "hide no-select" : "no-select"}>
        <img
          src={InfoIcon}
          alt="info icon"
          onClick={() => setShowInfo(!showInfo)}
        />
      </StyledContainer>
    )
  );
};

const StyledContainer = styled.div`
  min-height: 3rem;
  padding: 0.2rem 0.5rem 0.2rem 0.8rem;
  display: grid;
  place-content: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-out;
  border-radius: 50%;
  opacity: 1;
  font-size: 1.8rem;

  img {
    color: #f5c855;
    width: 30px;
    cursor: pointer;
    transform: translateX(-2px);

    &:active {
      transform: scale(0.7);
    }
  }

  &.hide {
    opacity: 0;
  }
`;

export default NavbarInfoIcon;
