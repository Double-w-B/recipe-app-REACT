import styled from "styled-components";

export const Labels = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: rgba(0, 0, 0, 0.65);
  font-weight: bold;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    transition: 0.2s ease-in !important;

    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
      transition: 0.1s ease-in;
    }
  }

  .name {
    font-weight: ${(props) => !props.isNameUpdate && "normal"};
    color: ${(props) => !props.isNameUpdate && "rgba(255, 255, 255, 0.7)"};
    cursor: ${(props) => (props.isNameUpdate ? "default" : "pointer")};
    pointer-events: ${(props) => props.isNameUpdate && "none"};
    background-color: ${(props) =>
      !props.isNameUpdate && "rgba(0, 0, 0, 0.55)"};

    svg {
      font-size: 1.4rem;
      color: ${(props) => props.isNameUpdate && "var(--yellow-clr)"};
    }

    &:hover {
      svg {
        color: ${(props) => !props.isNameUpdate && "var(--yellow-clr)"};
      }
    }
  }

  .email {
    font-weight: ${(props) => !props.isEmailUpdate && "normal"};
    color: ${(props) => !props.isEmailUpdate && "rgba(255, 255, 255, 0.7)"};
    cursor: ${(props) => (props.isEmailUpdate ? "default" : "pointer")};
    pointer-events: ${(props) => props.isEmailUpdate && "none"};
    background-color: ${(props) =>
      !props.isEmailUpdate && "rgba(0, 0, 0, 0.55)"};

    svg {
      color: ${(props) => props.isEmailUpdate && "var(--yellow-clr)"};
    }

    &:hover {
      svg {
        color: ${(props) => !props.isEmailUpdate && "var(--yellow-clr)"};
      }
    }
  }

  .password {
    width: 130px;
    font-weight: ${(props) => !props.isPasswordUpdate && "normal"};
    color: ${(props) => !props.isPasswordUpdate && "rgba(255, 255, 255, 0.7)"};
    cursor: ${(props) => (props.isPasswordUpdate ? "default" : "pointer")};
    pointer-events: ${(props) => props.isPasswordUpdate && "none"};
    background-color: ${(props) =>
      !props.isPasswordUpdate && "rgba(0, 0, 0, 0.55)"};

    svg {
      color: ${(props) => props.isPasswordUpdate && "var(--yellow-clr)"};
    }

    &:hover {
      svg {
        color: ${(props) => !props.isPasswordUpdate && "var(--yellow-clr)"};
      }
    }
  }
`;
