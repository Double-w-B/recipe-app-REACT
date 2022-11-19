import React, { useContext } from "react";
import styled from "styled-components";
import * as StyledModule from "../QueryResults/QueryResultsPage";
import { Link } from "react-router-dom";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { AppContext } from "../../../context/context";
import recipeImg from "../../../images/recipe.png";
import { shake } from "../../../styles/shared/Keyframes.style";
import Navigation from "../../shared/Navigation";

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
        <Navigation page={"storage"} />
        <StyledSavedRecipesWrapper>
          <StyledSavedRecipesContainer className="no-select">
            {Object.values(localStrRecipes).map((item) => {
              const id = item.recipe.uri.substring(51);
              return (
                <SingleRecipeResult
                  key={id}
                  item={item}
                  id={id}
                  type={"saved"}
                />
              );
            })}
          </StyledSavedRecipesContainer>
        </StyledSavedRecipesWrapper>
      </main>
    );
  }
};

const StyledSavedRecipesWrapper = styled(StyledModule.StyledResultsWrapper)``;
const StyledSavedRecipesContainer = styled(
  StyledModule.StyledResultsContainer
)``;

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
    -webkit-animation: ${shake} 4.72s ease infinite;
    -moz-animation: ${shake} 4.72s ease infinite;
    -o-animation: ${shake} 4.72s ease infinite;
    animation: ${shake} 4.72s ease infinite;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default SavedRecipesResults;
