import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/context";
import errorImg from "../../images/error.png";
import errorSearch from "../../images/errorSearch.png";

const Error = () => {
  const { recipes, lastQuery, handleError, currentPath, handleQuery } =
    React.useContext(AppContext);
  const { diet, health, meal, cuisine, dish, calories } =
    React.useContext(AppContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      if (currentPath === "/savedrecipes") {
        navigate("/savedrecipes");
      } else {
        navigate("/");
      }
      handleQuery("");
      localStorage.setItem("lastQuery", JSON.stringify(""));
      handleError(false);
    }, 4000);
  });

  if (recipes.length === 0 && lastQuery) {
    return (
      <main>
        <div className="error">
          <Wrapper>
            <div className="circle">
              <img src={errorSearch} alt="error" className="errorSearch" />
            </div>
          </Wrapper>
          <h2>
            No recipes found for: <span>{lastQuery}</span>
            <br />
            {(diet || health || meal || cuisine || dish || calories) &&
              "and your preferences."}
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="error">
        <Wrapper>
          <p>
            4 <img src={errorImg} alt="error" /> 4
          </p>
        </Wrapper>
        <h2>Oops, the page you were looking for doesn't exist.</h2>
      </div>
    </main>
  );
};

const Wrapper = styled.div`
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
    /* background-color: yellow; */
    .errorSearch {
      -webkit-animation: rotate 3s linear infinite; /* Chrome, Safari 5 */
      -moz-animation: rotate 3s linear infinite; /* Firefox 5-15 */
      -o-animation: rotate 3s linear infinite; /* Opera 12+ */
      animation: rotate 3s linear infinite; /* Chrome, Firefox 16+, 
                                                      IE 10+, Safari 5 */
      width: 150px;
      margin: 0 auto;
      opacity: 0.8;
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg) translateX(30px) rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg) translateX(30px) rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
  }

  @-o-keyframes rotate {
    from {
      -o-transform: rotate(0deg) translateX(30px) rotate(0deg);
    }
    to {
      -o-transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg) translateX(30px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
  }
`;

export default Error;
