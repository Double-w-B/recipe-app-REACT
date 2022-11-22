import styled from "styled-components";

const StyledScrollButton = styled.div`
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => !props.visible && "none"};
  transition: all 0.3s linear;

  svg {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    border-radius: 0.3rem;
    background-color: rgba(0, 0, 0, 0.3);

    &:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 1100px) {
    right: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    right: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    right: ${(props) => (props.visible ? "0" : "-5rem")};
    svg {
      font-size: 1.8rem;
      border-radius: 0.3rem 0 0 0.3rem;
    }
  }
`;

export default StyledScrollButton;
