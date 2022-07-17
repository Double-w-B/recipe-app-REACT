import React, { useContext } from "react";
import styled from "styled-components";
import * as StyledModule from "../Pages/SearchResults";
import { Link } from "react-router-dom";
import SavedSingleRecipe from "./SavedSingleRecipe";
import { AppContext } from "../../context/context";
import recipeImg from "../../images/recipe.png";

const SavedRecipesResults = () => {
  const { localStrRecipes, changeThePath, currentPath } =
    useContext(AppContext);

  React.useEffect(() => {
    if (currentPath !== "/savedrecipes") {
      changeThePath("");
      setTimeout(() => {
        changeThePath(window.location.pathname);
      }, 500);
    }
    // eslint-disable-next-line
  }, []);

  if (localStrRecipes.length < 1) {
    return (
      <main>
        <StyledNoRecipesContainer>
          <div>
            <h1>
              Add your first recipe to have it <br /> always by your side!
            </h1>
            <Link to="/">
              <img src={recipeImg} alt="icon" />
            </Link>
          </div>
        </StyledNoRecipesContainer>
      </main>
    );
  }

  if (localStrRecipes.length > 0) {
    return (
      <main>
        <StyledSavedRecipesWrapper>
          <StyledSavedRecipesContainer className="no-select">
            {Object.values(localStrRecipes).map((item) => {
              const id = item.recipe.uri.substring(51);
              return <SavedSingleRecipe key={id} item={item} id={id} />;
            })}
          </StyledSavedRecipesContainer>
        </StyledSavedRecipesWrapper>
      </main>
    );
  }
};

const StyledSavedRecipesWrapper = styled(StyledModule.StyledResultsWrapper)``;
const StyledSavedRecipesContainer = styled(StyledModule.StyledResultsContainer)``;

const StyledNoRecipesContainer = styled.section`
  height: 84vh;
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

export default SavedRecipesResults;
