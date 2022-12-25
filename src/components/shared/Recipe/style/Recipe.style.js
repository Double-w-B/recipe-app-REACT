import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4;
  background-color: var(--light-grey-bcg-clr);
  color: #000;
  box-shadow: var(--secondary-shadow);

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const Image = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 0.2rem;
  box-shadow: var(--primary-shadow);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    grid-column: 2/5;
    grid-row: 2/3;
    max-height: 300px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 700px) {
    grid-column: 1/6;
    margin: 0.5rem 4rem;
  }

  @media screen and (max-width: 600px) {
    margin: 0.5rem 2rem;
  }

  @media screen and (max-width: 550px) {
    margin: 0.5rem 0;
  }
`;
