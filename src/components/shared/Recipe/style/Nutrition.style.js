import styled from "styled-components";

export const Nutrition = styled.div`
  cursor: default;
  grid-column: 1/2;
  grid-row: 2/4;
  padding: 0.5rem 0;
  background-color: var(--light-grey-bcg-clr);
  box-shadow: var(--primary-shadow);

  h2 {
    color: rgba(0, 0, 0, 0.8);
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

  * {
    transition: var(--transition);
  }

  p {
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    line-height: 1.3;
    cursor: default;
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.75);

    span {
      &:not(.dot) {
        &:first-child {
          margin: 0 0.2rem;
        }

        margin: 0 0.2rem;
      }

      .dot {
        color: var(--yellow-clr);
      }

      &:hover {
        color: rgba(0, 0, 0, 1);

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
      hyphens: auto;

      span {
        &:not(.dot) {
          &:first-child {
            margin: 0 0.2rem 0 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ShowMoreButton = styled.button`
  text-align: center;
  text-transform: uppercase;
  margin: 1rem auto;
  display: block;
  padding: 0.3rem 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.55);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--yellow-clr);
  }

  &:active {
    transform: scale(0.9);
  }
`;
