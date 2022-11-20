import React from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { AppContext } from "../../context/context";

const MenuButton = () => {
  const { handleMenu, handleModal } = React.useContext(AppContext);

  const handleClick = () => {
    handleModal();
    handleMenu();
  };

  return (
    <StyledContainer>
      <HiMenu onClick={handleClick} />
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 2rem;
    color: var(--yellow-clr);
    color: rgba(255, 255, 255, 0.8);
    margin-right: 3rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 0, 0.3);

    &:active {
      transform: scale(0.9);
    }
  }
`;
export default MenuButton;
