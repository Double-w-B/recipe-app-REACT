import styled from "styled-components";
import { shake } from "../../../../styles/shared/Keyframes.style";

export const StyledNoRecipes = styled.section`
  height: calc(85vh - 40px - 4rem);

  h1 {
    text-align: center;
    font-size: 2rem;
    opacity: 0.7;
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  }

  div {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  img {
    width: 130px;
    opacity: 0.7;
    cursor: pointer;
    -webkit-animation: ${shake} 4.72s ease infinite;
    -moz-animation: ${shake} 4.72s ease infinite;
    -o-animation: ${shake} 4.72s ease infinite;
    animation: ${shake} 4.72s ease infinite;
    animation-delay: 1s;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 900px) {
    height: calc(77vh - 40px - 5rem);

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.6rem;
    }

    img {
      width: 110px;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
