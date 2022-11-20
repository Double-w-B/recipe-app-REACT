import styled from "styled-components";

export const Logo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    display: block;
    width: 180px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    margin-top: 0.5rem;
  }
`;
