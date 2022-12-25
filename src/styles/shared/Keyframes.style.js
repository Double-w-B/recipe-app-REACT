import { keyframes } from "styled-components";

export const wave = keyframes`
 
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
`;

export const rotate1 = keyframes`
  from {
    transform: rotate(0deg) translateX(30px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(30px) rotate(-360deg);
  }`;

export const rotate2 = keyframes`
    from {
      transform: rotate(0deg) translateX(5px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(5px) rotate(-360deg);
    }
  `;

export const shake = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;
