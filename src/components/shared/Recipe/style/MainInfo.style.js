import styled from "styled-components";

export const Info = styled.div`
  cursor: default;
  grid-column: 2/4;
  grid-row: 1/2;
  padding: 0.5rem 0.5rem 0 0.5rem;
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
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    font-size: 1rem;

    h1 {
      margin: 0.5rem 0 1rem 0;
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      margin: 0.5rem 0 1rem 0.5rem;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      margin-right: 1rem;
    }
  }
`;

export const SaveButton = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    p {
      opacity: 0.3;
    }
  }

  a {
    display: grid;
    place-items: center;

    svg {
      color: var(--red-clr);
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
    }
  }

  svg {
    font-size: 2.5rem;
    color: ${(props) =>
      props.saved ? "var(--red-clr)" : "rgba(0, 0, 0, 0.2)"};
    cursor: pointer;
    transition: all 0.3s linear;
    filter: ${(props) =>
      props.saved && "drop-shadow(0 0 2px rgba(0, 0, 0, 0.3))"};

    &:active {
      transform: scale(0.7);
    }
  }

  p {
    cursor: default;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    position: absolute;
    bottom: -1.5rem;
    left: 50;
    opacity: 0;
  }

  @media screen and (max-width: 550px) {
    max-height: 50px;
    max-width: 50px;

    img {
      width: 30px;
    }

    p {
      opacity: 0;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const ShortInfo = styled.div`
  width: 100%;
  text-transform: capitalize;
  margin-bottom: 1rem;

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  .time,
  .calories {
    text-transform: lowercase;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0.5rem;
  }
`;

export const HealthLabels = styled.div`
  cursor: default;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
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
  margin-top: 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  p {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--red-clr);
    font-style: italic;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    & *:last-child {
      margin-left: 0.5rem;
    }
  }

  button {
    width: 80px;
    padding: 0.3rem 0.2rem;
    border: none;
    border-radius: 0.1rem;
    outline: none;
    margin-left: 2rem;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    background-color: var(--olive-clr);
    box-shadow: var(--checkBox-shadow);
    transition: all 0.3s linear;
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
  }
`;
