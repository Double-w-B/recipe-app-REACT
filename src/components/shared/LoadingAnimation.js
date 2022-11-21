import React from "react";
import StyledLoadingAnimation from "./style/LoadingAnimation.style";

const LoadingAnimation = () => {
  return (
    <StyledLoadingAnimation className="no-select">
      <span style={{ "--i": 1 }}>F</span>
      <span style={{ "--i": 2 }}>o</span>
      <span style={{ "--i": 3 }}>o</span>
      <span style={{ "--i": 4 }}>d</span>
      <span style={{ "--i": 5 }}>i</span>
      <span style={{ "--i": 6 }}>e</span>
      <span style={{ "--i": 7 }}>M</span>
      <span style={{ "--i": 8 }}>o</span>
      <span style={{ "--i": 9 }}>o</span>
      <span style={{ "--i": 10 }}>d</span>
    </StyledLoadingAnimation>
  );
};

export default LoadingAnimation;
