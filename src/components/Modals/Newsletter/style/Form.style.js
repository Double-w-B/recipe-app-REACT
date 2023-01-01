import styled, { css } from "styled-components";
import { shake } from "../../../../styles/shared/Keyframes.style";

export const Form = styled.form`
  margin: 0 auto;
  width: 70%;
  min-width: 400px;
  height: 40px;
  display: flex;
  border: 2px solid var(--yellow-clr);
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;

  input {
    height: 100%;
    width: 90%;
    border: none;
    outline: none;
    padding-left: 10%;
    text-align: center;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.7);
    background-color: transparent;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 0.3;
      /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(0, 0, 0, 0.3);
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(0, 0, 0, 0.3);
    }
  }

  p.errorMsg {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: var(--red-clr);
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    input {
      text-align: left;
      padding-left: 0.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    width: 60%;
    min-width: 350px;

    input {
      width: 85%;
    }
  }

  @media screen and (max-width: 550px) {
    min-width: 320px;
  }

  @media screen and (max-width: 400px) {
    min-width: 280px;
  }
`;

export const Button = styled.button`
  width: 10%;
  height: 100%;
  display: grid;
  place-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  pointer-events: ${(props) => props.isLoading && "none"};

  img {
    width: 22px;
    height: 22px;
  }

  svg {
    font-size: 1.5rem;
    transform: translateY(-0.5px);
    color: var(--yellow-clr);
    cursor: pointer;
    animation: ${(props) =>
      props.email &&
      css`
        ${shake} 6.5s linear 2;
      `};
    animation-delay: 1s;

    &:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 600px) {
    width: 15%;
  }
`;
