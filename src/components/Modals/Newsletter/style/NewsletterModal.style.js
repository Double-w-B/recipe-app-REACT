import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.7);
  color: #303030;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  clip-path: inset(-5px -5px -5px -5px);
  position: relative;

  img {
    width: 280px;
    margin: 0 auto;
  }

  h1 {
    justify-self: center;
    color: var(--red-clr);
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
  }

  p {
    &:first-of-type:not(.errorMsg) {
      font-size: 1.6rem;
      font-weight: bold;
      color: var(--yellow-clr);
      text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
    }

    &:last-of-type:not(.errorMsg) {
      font-weight: bold;
      color: var(--red-clr);
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 900px) {
    img {
      width: 230px;
    }

    h1 {
      font-size: 1.8rem;
    }

    p {
      &:first-of-type:not(.errorMsg) {
        font-size: 1.5rem;
      }

      &:last-of-type:not(.errorMsg) {
        margin: 0 1rem;
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: 200px;
    }

    h1 {
      font-size: 1.6rem;
      margin: 0 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      &:first-of-type:not(.errorMsg) {
        font-size: 1.35rem;
      }

      &:last-of-type:not(.errorMsg) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  opacity: 1;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  svg {
    width: 100%;
    height: 100%;
    color: var(--red-clr);
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:active {
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
