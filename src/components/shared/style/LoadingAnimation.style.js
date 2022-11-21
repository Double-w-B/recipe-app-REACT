import styled from "styled-components";
import { wave } from "../../../styles/shared/Keyframes.style";

const StyledLoadingAnimation = styled.p`
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

export default StyledLoadingAnimation;
