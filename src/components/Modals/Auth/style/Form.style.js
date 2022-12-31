import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: calc(100% - 45px - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${(props) =>
    props.isLogIn ? "1.5rem 0.5rem" : "0.5rem 0.5rem 1rem 0.5rem"};
  position: relative;

  p:not(.errorMsg) {
    text-align: center;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);

    &:first-child {
      font-size: 1.3rem;
    }
    span {
      font-weight: bold;
      color: var(--yellow-clr);
    }
  }

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
    color: rgba(0, 0, 0, 0.65);
    display: ${(props) =>
      props.isLogInGreeting || props.isRegisterSuccess ? "none" : "flex"};
    flex-direction: column;
    transition: 0.35s linear;
    position: relative;

    &:first-child {
      display: ${(props) =>
        props.isLogIn || props.isLogInGreeting || props.isRegisterSuccess
          ? "none"
          : "flex"};
    }

    &:last-child input {
      padding: 0 28px 0 0.5rem;
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
`;
