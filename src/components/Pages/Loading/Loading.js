import React from "react";
import StyledLoading from "./style/Loading.style";
import LoadingAnimation from "../../shared/LoadingAnimation";

const Loading = () => {
  return (
    <main>
      <StyledLoading>
        <LoadingAnimation />
      </StyledLoading>
    </main>
  );
};

export default Loading;
