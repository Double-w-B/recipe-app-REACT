import styled from "styled-components";
import BackgroundImg from "../../../../images/greeting_bckg.webp";

const StyledAuthModal = styled.div`
  width: 380px;
  height: 305px;
  padding: 0.5rem;
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

  * {
    transition: var(--transition);
  }

  .auth__wrapper {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 15px;
    background-color: rgba(255, 255, 255, 0.7);

    .auth__action {
      width: 100%;
      height: 45px;
      display: flex;
      color: rgba(0, 0, 0, 0.65);
      font-weight: bold;

      div {
        width: 50%;
        height: 100%;
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
        font-weight: ${(props) => !props.isLogIn && "normal"};
        color: ${(props) => !props.isLogIn && "rgba(255, 255, 255, 0.7)"};
        cursor: ${(props) => (props.isLogIn ? "default" : "pointer")};
        pointer-events: ${(props) =>
          (props.userName || props.isLoading) && "none"};
        background-color: ${(props) => !props.isLogIn && "rgba(0, 0, 0, 0.55)"};

        svg {
          color: ${(props) => props.isLogIn && "var(--yellow-clr)"};
        }

        &:hover {
          svg {
            color: ${(props) => !props.isLogIn && "var(--yellow-clr)"};
          }
        }
      }

      .register {
        font-weight: ${(props) => props.isLogIn && "normal"};
        color: ${(props) => props.isLogIn && "rgba(255, 255, 255, 0.7)"};
        cursor: ${(props) => (!props.isLogIn ? "default" : "pointer")};
        pointer-events: ${(props) =>
          (props.isLogInGreeting || props.isLoading) && "none"};
        background-color: ${(props) => props.isLogIn && "rgba(0, 0, 0, 0.55)"};

        svg {
          color: ${(props) => !props.isLogIn && "var(--yellow-clr)"};
        }

        &:hover {
          svg {
            color: ${(props) => props.isLogIn && "var(--yellow-clr)"};
          }
        }
      }
    }

    form {
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
        width: 75%;
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
    }

    .buttons {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      button {
        width: 90px;
        padding: 0.3rem 0.5rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1.1rem;
        outline: none;
        border: none;
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0.55);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;

        &:first-child {
          display: ${(props) =>
            (props.isLogInGreeting || props.isRegisterSuccess) && "none"};
          pointer-events: ${(props) => props.isLoading && "none"};
          cursor: ${(props) => props.isLoading && "default"};
        }

        img {
          width: 40px;
          width: 22px;
          height: calc(38px - 1rem);
          display: block;
          object-fit: fill;
          margin: 0 auto;
        }

        &:hover {
          color: var(--yellow-clr);
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default StyledAuthModal;
