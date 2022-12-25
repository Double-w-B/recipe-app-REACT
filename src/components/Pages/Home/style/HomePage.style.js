import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  min-height: 90%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, minmax(15.5rem, 1fr));

  * {
    transition: var(--transition);
  }

  @media screen and (max-width: 1630px) {
    width: 80%;
  }

  @media screen and (max-width: 1430px) {
    width: 90%;
  }

  @media screen and (max-width: 1260px) {
    width: 100%;
  }

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(3, minmax(14rem, 1fr));
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(14rem, 1fr));
    margin: 2rem 0;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(14.5rem, 1fr));
  }

  @media screen and (max-width: 645px) {
    grid-template-columns: repeat(1, minmax(17.5rem, 1fr));
  }
`;
