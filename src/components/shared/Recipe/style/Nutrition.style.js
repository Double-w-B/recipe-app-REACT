import styled from "styled-components";

export const Nutrition = styled.div`
  cursor: default;
  grid-column: 1/2;
  grid-row: 2/4;
  padding: 0.5rem 0;
  background-color: var(--light-grey-bcg-clr);
  box-shadow: var(--primary-shadow);

  h2 {
    color: #000;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    grid-row: 4/5;
  }
`;

export const Nutrients = styled.div`
  width: 100%;
  padding: 0 1.3rem;

  p {
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    line-height: 1.3;
    transition: all 0.3s linear;
    cursor: default;
    opacity: 0.8;
    display: flex;
    flex-direction: column;

    span {
      &:not(.dot) {
        &:first-child {
          margin: 0 0.2rem 0 0;
        }
        margin: 0 0.2rem;
      }

      .dot {
        color: var(--yellow-clr);
      }

      &:hover {
        opacity: 1;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

        .dot {
          color: var(--red-clr);
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 1.05rem;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      display: block;
      text-align: justify;
      overflow-wrap: break-word;
    }
  }
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ShowMoreButton = styled.button`
  width: 50%;
  padding: 0.2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  background-color: transparent;
  box-shadow: var(--checkBox-shadow);
  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
    background-color: rgba(246, 186, 5, 0.6);
    box-shadow: var(--secondary-shadow);
  }

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 900px) {
    width: 30%;
    background-color: rgba(246, 186, 5, 0.6);
  }
`;
