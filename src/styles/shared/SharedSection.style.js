import styled from "styled-components";

export const SharedSection = styled.section`
  width: 70%;
  margin: 0 auto;
  min-height: 84vh;
  display: grid;

  @media screen and (max-width: 1250px) {
    width: 80%;
  }
  @media screen and (max-width: 1060px) {
    width: 85%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;
