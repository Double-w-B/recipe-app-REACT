import React from "react";
import styled from "styled-components";

import loadingImage from "../images/preloader.gif";

const Loading = () => {
  return (
    <main>
      <Wrapper>
        <img src={loadingImage} alt="preloader" />
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 84vh;
  font-size: 1.4rem;
  margin: 0 auto;
  display: grid;
  place-content: center;
  /* background-color: rgba(0, 0, 0, 0.3); */
  @media screen and (max-width: 992px) {
    & img {
      margin-left: 2.5rem;
    }
  }
`;
export default Loading;
