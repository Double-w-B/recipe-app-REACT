import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: calc(100% - 110px - 60px);
  display: ${(props) => (props.isUserDeleted ? "none" : "flex")};
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.5rem;
  position: relative;

  p.errorMsg {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: var(--red-clr);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
  }

  label {
    width: 80%;
    height: 50px;
    color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 0.35s linear;
    position: relative;

    input {
      width: 100%;
      height: 26px;
      transition: 0.3s linear;
      font-size: 1.05rem;
      color: rgba(0, 0, 0, 0.7);
      outline: none;
      border: 2px solid var(--yellow-clr);
      border-radius: 2px;
      padding: 0 0.5rem;
      background-color: rgba(255, 255, 255, 0.4);
    }

    svg {
      position: absolute;
      bottom: 5px;
      right: 8px;
      cursor: pointer;

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
