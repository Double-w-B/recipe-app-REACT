import styled from "styled-components";

export const Labels = styled.div`
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
    transition: 0.2s ease-in !important;

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
    pointer-events: ${(props) => (props.userName || props.isLoading) && "none"};
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
`;
