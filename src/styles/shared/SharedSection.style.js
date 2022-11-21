import styled from "styled-components";

export const SharedSection = styled.section`
  /* padding: 3rem 7rem 3rem 7rem; */
  width: 70%;
  margin: 0 auto;
  min-height: 84vh;
  display: grid;
  place-items: center;
  /* background-color: tomato; */

  @media screen and (max-width: 1250px) {
    width: 80%;
  }
  @media screen and (max-width: 1060px) {
    width: 85%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 992px) {
    /* padding: 2rem 3rem 2rem 3rem; */
  }

  @media screen and (max-width: 900px) {
    /* padding: 5rem 3rem 2rem 3rem; */
  }

  @media screen and (max-width: 768px) {
    /* padding: 5rem 2rem 2rem 2rem; */
  }

  @media screen and (max-width: 480px) {
    /* padding: 5rem 1rem 2rem 1rem; */
  }

  @media screen and (max-width: 400px) {
    /* padding: 5rem 0.5rem 2rem 0.5rem; */
  }
`;
