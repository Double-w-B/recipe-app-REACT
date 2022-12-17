import styled from "styled-components";
import BackgroundImg from "../../../../images/greeting_bckg.webp";

const StyledAuthModal = styled.div`
  width: 380px;
  height: 305px;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  background: #fff url(${BackgroundImg}) no-repeat fixed;
  background-size: cover;
  box-shadow: var(--primary-shadow);
  z-index: 11;

  .authAction {
    width: 100%;
    height: 50px;
    display: flex;
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;

    div {
      width: calc(50% - 0.5rem);
      height: calc(100% - 0.5rem);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      transition: 0.2s ease-in;

      svg {
        font-size: 1.4rem;
        margin-right: 0.5rem;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        transition: 0.1s ease-in;
      }
    }

    .log-in {
      margin: 0.5rem 0 0 0.5rem;
      font-weight: ${(props) => !props.isLogin && "normal"};
      color: ${(props) => !props.isLogin && "rgba(255, 255, 255, 0.7)"};
      cursor: ${(props) => (props.isLogin ? "default" : "pointer")};
      box-shadow: ${(props) => props.isLogin && "0 0 8px rgba(0, 0, 0, 0.5)"};
      clip-path: ${(props) => props.isLogin && "inset(-5px 0px 0px -5px)"};
      background-color: ${(props) =>
        props.isLogin ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.55)"};

      svg {
        color: ${(props) => props.isLogin && "var(--yellow-clr)"};
      }

      &:hover {
        svg {
          color: ${(props) => !props.isLogin && "var(--yellow-clr)"};
        }
      }
    }

    .register {
      margin: 0.5rem 0.5rem 0 0;
      font-weight: ${(props) => props.isLogin && "normal"};
      color: ${(props) => props.isLogin && "rgba(255, 255, 255, 0.7)"};
      cursor: ${(props) => (!props.isLogin ? "default" : "pointer")};
      box-shadow: ${(props) => !props.isLogin && "0 0 8px rgba(0, 0, 0, 0.5)"};
      clip-path: ${(props) => !props.isLogin && "inset(-5px -5px 0px 0px)"};
      background-color: ${(props) =>
        !props.isLogin ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.55)"};

      svg {
        color: ${(props) => !props.isLogin && "var(--yellow-clr)"};
      }

      &:hover {
        svg {
          color: ${(props) => props.isLogin && "var(--yellow-clr)"};
        }
      }
    }
  }

  form {
    width: calc(100% - 1rem);
    height: calc(100% - calc(70px - 0.5rem) - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 0.5rem;
    padding: ${(props) => (props.isLogin ? "1.5rem 0" : "0.5rem 0")};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    clip-path: inset(0px -5px 0px -5px);

    label {
      width: 75%;
      color: rgba(0, 0, 0, 0.65);
      display: flex;
      flex-direction: column;
      transition: 0.3s linear;
      position: relative;

      &:first-child {
        display: ${(props) => (props.isLogin ? "none" : "flex")};
      }

      svg {
        position: absolute;
        bottom: 5px;
        right: 5px;
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
  }

  p {
    width: 100%;
    height: 10%;
    text-align: center;
    cursor: pointer;
  }

  .buttons {
    width: calc(100%- 1rem);
    height: calc(70px - 0.5rem);
    margin: 0 0.5rem 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    clip-path: inset(0px -5px -5px -5px);

    button {
      width: 90px;
      padding: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.1rem;
      outline: none;
      border: none;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0.55);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;

      &:hover {
        color: var(--yellow-clr);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

export default StyledAuthModal;
