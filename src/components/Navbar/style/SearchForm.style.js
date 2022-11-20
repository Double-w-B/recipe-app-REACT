import styled from "styled-components";

export const SearchForm = styled.form`
  width: 50%;
  height: 50px;
  display: flex;
  border: 2px solid var(--yellow-clr);
  box-shadow: var(--primary-shadow);
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 2;

  input {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    color: var(--red-clr);
    padding-left: 2rem;
    font-size: 1.5rem;
    text-transform: lowercase;
    background-color: transparent;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 0.3;
      /* Firefox */
      font-style: italic;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(0, 0, 0, 0.3);
      font-style: italic;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(0, 0, 0, 0.3);
      font-style: italic;
    }
  }

  a,
  button {
    width: 10%;
    height: 100%;
  }

  a button {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 1.5rem;
    color: var(--yellow-clr);
    cursor: pointer;
    background-color: transparent;
  }

  button {
    outline: none;
    border: none;
    font-size: 1.5rem;
    color: var(--yellow-clr);
    cursor: pointer;
    background-color: transparent;

    & svg {
      transform: translateY(2px);
    }
  }

  @media screen and (max-width: 1200px) {
    input {
      font-size: 1.45rem;
    }
  }

  @media screen and (max-width: 992px) {
    width: 50%;

    input {
      width: 85%;
      font-size: 1.45rem;
    }

    a,
    button {
      width: 15%;
    }
  }

  @media screen and (max-width: 900px) {
    width: 80%;
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    input {
      padding-left: 1rem;
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 85%;

    input {
      font-size: 1.35rem;
    }
  }

  @media screen and (max-width: 480px) {
    input {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;

    input {
      padding-left: 0.5rem;
    }
    button {
      font-size: 1.3rem;
    }
  }
`;
