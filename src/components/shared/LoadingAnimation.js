import React from "react";
import styled from "styled-components";
import { wave } from "../../styles/shared/Keyframes.style";

const LoadingAnimation = () => {
  return (
    <StyledParagraph className="no-select">
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
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  color: var(--red-clr);

  span {
    position: relative;
    display: inline-block;
    -webkit-animation: ${wave} 1.5s infinite;
    -moz-animation: ${wave} 1.5s infinite;
    -o-animation: ${wave} 1.5s infinite;
    animation: ${wave} 1.5s infinite;
    animation-delay: calc(0.1s * var(--i));
  }
`;

export default LoadingAnimation;
