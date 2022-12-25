import styled from "styled-components";

const StyledScrollButton = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => !props.visible && "none"};
  transition: all 0.3s linear;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 2px;

  svg {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
  }

  &:hover {
    svg {
      color: var(--yellow-clr);
    }
  }

  &:active {
    transform: scale(0.8);
  }

  @media screen and (max-width: 1100px) {
    right: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    right: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    right: ${(props) => (props.visible ? "0" : "-5rem")};
    border-radius: 2px 0 0 2px;
  }
`;

export default StyledScrollButton;
