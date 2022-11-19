import React from "react";
import styled from "styled-components";
import { ImMenu } from "react-icons/im";

const MenuButton = () => {
  return (
    <StyledContainer>
      <ImMenu />
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
    color: rgba(0, 0, 0, 0.7);
    color: var(--yellow-clr);
    margin-right: 3rem;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.2rem;
    background-color: rgba(0, 0, 0, 0.3);

    &:active {
      transform: scale(0.9);
    }
  }
`;
export default MenuButton;
