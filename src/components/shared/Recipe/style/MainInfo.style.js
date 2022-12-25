import styled from "styled-components";

export const Info = styled.div`
  cursor: default;
  grid-column: 2/4;
  grid-row: 1/2;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  font-size: 1.2rem;
  position: relative;

  h1 {
    width: 80%;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: var(--red-clr);
    line-height: 1;
    font-size: 2rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    grid-row: 1/2;
    margin-right: 0rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;

    h1 {
      width: 70%;
      margin: 0 0 1rem 0;
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      margin-right: 1rem;
    }
  }
`;

export const SaveButton = styled.button`
  min-width: 77px;
  min-height: 28px;
  padding: 0.3rem 0.5rem;
  outline: none;
  border: none;
  text-align: center;
  font-size: 0.9rem;
  transition: all 0.3s linear;
  color: ${(props) =>
    props.recipeStatus ? "var(--yellow-clr)" : "rgba(255, 255, 255, 0.7)"};
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.55);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  pointer-events: ${(props) => props.isRecipeStatusLoading && "none"};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  img {
    width: 1rem;
    height: 1rem;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    color: var(--yellow-clr);
  }
  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 600px) {
    right: 0;
    top: 0;
  }
`;

export const ShortInfo = styled.div`
  width: 100%;
  text-transform: capitalize;
  margin-bottom: 1rem;

  p {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
    margin-left: 0.5rem;

    svg {
      font-size: 1.4rem;
      margin-right: 0.5rem;
    }
  }

  .time,
  .calories {
    text-transform: lowercase;
  }

  @media screen and (max-width: 600px) {
    p {
      margin-left: 0;
    }
  }
`;

export const HealthLabels = styled.div`
  cursor: default;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  background-color: var(--olive-clr);
  box-shadow: var(--checkBox-shadow);

  p {
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.95rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    margin: 0.5rem 0 1rem 0;
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0 0 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  p {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
    color: var(--red-clr);
    font-style: italic;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }

  button {
    width: 80px;
    padding: 0.3rem 0.3rem;
    outline: none;
    border: none;
    margin-left: 2rem;
    text-align: center;
    font-size: 1rem;
    transition: all 0.3s linear;
    color: ${(props) =>
      props.copied ? "var(--yellow-clr)" : "rgba(255, 255, 255, 0.7)"};
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

  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
  }
  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }
`;
