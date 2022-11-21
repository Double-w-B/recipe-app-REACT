import styled from "styled-components";

export const SharedContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  margin-bottom: 2rem;
  grid-template-columns: repeat(3, minmax(17.5rem, 1fr));

  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;
