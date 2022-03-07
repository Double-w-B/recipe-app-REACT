import React, { useContext } from "react";
import styled from "styled-components";
import { LocalSingleRecipe } from "../index";
import { AppContext } from "../../context/context";
import { Link } from "react-router-dom";
import recipeImg from "../../images/recipe.png";

const LocalRecipes = () => {
  const { localStrRecipes, setCurrentPath, currentPath } =
    useContext(AppContext);

  React.useEffect(() => {
    // setCurrentPath(window.location.pathname);
    if (currentPath !== "/savedrecipes") {
      setCurrentPath("");
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
      }, 500);
    }
    console.log(currentPath);
  }, []);

  if (localStrRecipes.length < 1) {
    return (
      <main>
        <Wrapper>
          <div>
            <h1>
              Add your first recipe to have it <br /> always by your side!
            </h1>
            <Link to="/">
              <img src={recipeImg} alt="icon" />
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }

  if (localStrRecipes.length > 0) {
    return (
      <main>
        <section className="recipes-container">
          <div className="results-container no-select">
            {Object.values(localStrRecipes).map((item) => {
              const id = item.recipe.uri.substring(51);
              return <LocalSingleRecipe key={id} item={item} id={id} />;
            })}
          </div>
        </section>
      </main>
    );
  }
};

const Wrapper = styled.section`
  height: 84vh;
  /* min-height: 84vh; */
  h1 {
    margin-top: 3rem;
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
    animation: shake-animation 4.72s ease infinite;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @keyframes shake-animation {
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
  }
`;

export default LocalRecipes;
