import styled from "styled-components";
import { rotate1 } from "../../../../styles/shared/Keyframes.style";

const StyledError = styled.div`
  width: 100%;
  height: 84vh;
  font-size: 1.4rem;
  margin: 0 auto;
  display: grid;
  place-content: center;

  h2 {
    margin: 3rem 1rem 0 1rem;
    color: #e5e5e55d;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);

    & + p {
      margin-top: 1rem;
      opacity: 0.5;
      text-align: center;
      font-style: italic;
    }

    span {
      color: var(--yellow-clr);
      letter-spacing: 1px;
      text-decoration: underline;
      background-color: rgba(124, 123, 123, 0.6);
      background-color: rgba(0, 0, 0, 0.4);
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
      text-shadow: none;
    }
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;

  p {
    font-size: 7rem;
    font-family: "Nixie One", cursive;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7);
  }
  img {
    width: 90px;
    opacity: 0.7;
  }
  .circle {
    border-radius: 50%;
    .errorSearch {
      -webkit-animation: ${rotate1} 3s linear infinite; /* Chrome, Safari 5 */
      -moz-animation: ${rotate1} 3s linear infinite; /* Firefox 5-15 */
      -o-animation: ${rotate1} 3s linear infinite; /* Opera 12+ */
      animation: ${rotate1} 3s linear infinite; /* Chrome, Firefox 16+, 
                                                      IE 10+, Safari 5 */
      width: 150px;
      margin: 0 auto;
      opacity: 0.8;
    }
  }
`;

StyledError.ImgContainer = ImgContainer;

export default StyledError;
