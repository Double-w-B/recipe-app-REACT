import styled from "styled-components";

const StyledLoading = styled.div`
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  font-size: 4rem;

  @media screen and (max-width: 992px) {
    font-size: 3rem;
  }
`;

export default StyledLoading;
