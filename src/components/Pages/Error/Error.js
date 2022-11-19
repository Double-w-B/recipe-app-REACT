import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import errorImg from "../../../images/error.png";
import errorSearch from "../../../images/errorSearch.png";
import { rotate1 } from "../../../styles/shared/Keyframes.style";

const Error = () => {
  const [seconds, setSeconds] = React.useState(5);

  const { recipes, lastQuery, handleError, currentPath, handleQuery } =
    React.useContext(AppContext);
  const { diet, health, meal, cuisine, dish, calories } =
    React.useContext(AppContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
        currentPath === "/savedrecipes"
          ? navigate("/savedrecipes")
          : navigate("/");
        handleQuery("");
        sessionStorage.setItem("lastQuery", JSON.stringify(""));
        handleError(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  if (recipes.length === 0 && lastQuery) {
    return (
      <main>
        <StyledErrorContainer>
          <StyledImgContainer>
            <div className="circle">
              <img src={errorSearch} alt="error" className="errorSearch" />
            </div>
          </StyledImgContainer>
          <h2>
            No recipes found for: <span>{lastQuery}</span>
            <br />
            {(diet || health || meal || cuisine || dish || calories) &&
              "and your preferences."}
          </h2>
        </StyledErrorContainer>
      </main>
    );
  }

  return (
    <main>
      <StyledErrorContainer>
        <StyledImgContainer>
          <p>
            4 <img src={errorImg} alt="error" /> 4
          </p>
        </StyledImgContainer>
        <h2>Oops, the page you were looking for doesn't exist.</h2>
        <p>... redirect after {seconds} sec</p>
      </StyledErrorContainer>
    </main>
  );
};

const StyledErrorContainer = styled.div`
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
`;

const StyledImgContainer = styled.div`
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

export default Error;
