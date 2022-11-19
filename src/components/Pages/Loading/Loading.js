import React from "react";
import styled from "styled-components";
import LoadingAnimation from "../../shared/LoadingAnimation";

const Loading = () => {
  return (
    <main>
      <Wrapper>
        <LoadingAnimation />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 84vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  font-size: 4rem;

  @media screen and (max-width: 992px) {
    font-size: 3rem;
  }
`;
export default Loading;
