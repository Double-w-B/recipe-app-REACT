import styled from "styled-components";

export const MenuButton = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 2rem;
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

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 65px;
    width: 65px;
    justify-content: center;
    svg {
      margin-right: 0;
    }
  }
`;
