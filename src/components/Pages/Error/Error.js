import React from "react";
import StyledError from "./style/Error.style";
import { useNavigate } from "react-router-dom";
import errorImg from "../../../images/error.png";
import { AppContext } from "../../../context/context";
import errorSearch from "../../../images/errorSearch.png";

const Error = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [seconds, setSeconds] = React.useState(5);

  const { recipes, lastQuery, handleError, handleLastQuery } =
    React.useContext(AppContext);
  const { diet, health, meal, cuisine, dish, calories } =
    React.useContext(AppContext);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 1) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
        navigateUser();
        handleLastQuery("");
        sessionStorage.setItem("lastQuery", JSON.stringify(""));
        handleError(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const navigateUser = () => {
    if (location.split("/").includes("savedrecipes")) {
      return navigate("/savedrecipes");
    }
    navigate("/");
  };

  if (recipes.length === 0 && lastQuery) {
    return (
      <main>
        <StyledError>
          <StyledError.ImgContainer>
            <div className="circle">
              <img src={errorSearch} alt="error" className="errorSearch" />
            </div>
          </StyledError.ImgContainer>
          <h2>
            No recipes found for: <span>{lastQuery}</span>
            <br />
            {(diet || health || meal || cuisine || dish || calories) &&
              "and your preferences."}
          </h2>
          <p>... redirect after {seconds} sec</p>
        </StyledError>
      </main>
    );
  }

  return (
    <main>
      <StyledError>
        <StyledError.ImgContainer>
          <p>
            4 <img src={errorImg} alt="error" /> 4
          </p>
        </StyledError.ImgContainer>
        <h2>Oops, the page you were looking for doesn't exist.</h2>
        <p>... redirect after {seconds} sec</p>
      </StyledError>
    </main>
  );
};

export default Error;
