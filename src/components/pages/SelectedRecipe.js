import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import * as recipeModule from "../Recipe";

const SelectedRecipe = () => {
  const { path, recipes, setRecipe, changeThePath } = useContext(AppContext);
  const { updateLocalStrRecipes, localStrRecipes, rotateStar } =
    useContext(AppContext);

  const [checked, setChecked] = useState(false);

  const found = recipes.find((item) => {
    const { uri } = item.recipe;
    return uri.substring(51) === path;
  });

  React.useEffect(() => {
    changeThePath(window.location.pathname);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    Object.values(localStrRecipes).find(
      (item) =>
        item.recipe.uri.substring(51) === found.recipe.uri.substring(51) &&
        setChecked(true)
    );
  });

  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const checkStorage = (found) => {
    const filteredStorage = () =>
      Object.values(localStrRecipes).filter(
        (item) =>
          item.recipe.uri.substring(51) !== found.recipe.uri.substring(51)
      );

    if (checked) {
      updateLocalStrRecipes(filteredStorage());
      setRecipe("");
    }

    if (!checked) {
      updateLocalStrRecipes([...localStrRecipes, found]);
      rotateStar();
    }
  };

  const { image, label } = found.recipe;

  return (
    <StyledRecipeWrapper key={path}>
      <StyledRecipeContainer>
        <StyledRecipeImg>
          <img src={image} alt={label} />
        </StyledRecipeImg>

        <recipeModule.RecipeInfo
          checked={checked}
          setChecked={setChecked}
          checkStorage={checkStorage}
          found={found}
        />
        <recipeModule.RecipeNutrition found={found} />
        <recipeModule.RecipeIngredients found={found} />
      </StyledRecipeContainer>
    </StyledRecipeWrapper>
  );
};

export const StyledRecipeWrapper = styled.article`
  padding: 4rem 7rem 3rem 7rem;
  min-height: 84vh;

  @media screen and (max-width: 1300px) {
    padding: 4rem 4.5rem 3rem 4.5rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 4rem 2.5rem 3rem 2.5rem;
  }

  @media screen and (max-width: 900px) {
    padding: 6rem 2.5rem 3rem 2.5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 6rem 1rem 3rem 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 6rem 0.5rem 3rem 0.5rem;
  }
`;

export const StyledRecipeContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4;
  background-color: var(--light-grey-bcg-clr);
  color: #000;
  box-shadow: var(--secondary-shadow);

  @media screen and (max-width: 1800px) {
    width: 75%;
  }

  @media screen and (max-width: 1700px) {
    width: 80%;
  }

  @media screen and (max-width: 1530px) {
    width: 85%;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 992px) {
    width: 95%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const StyledRecipeImg = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border: 2px solid rgba(0, 0, 0, 0.6);
  box-shadow: var(--primary-shadow);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    grid-column: 2/5;
    grid-row: 2/3;
    max-height: 300px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 700px) {
    grid-column: 1/6;
    margin: 0.5rem 4rem;
  }

  @media screen and (max-width: 600px) {
    margin: 0.5rem 2rem;
  }

  @media screen and (max-width: 550px) {
    margin: 0.5rem 0;
  }
`;

export default SelectedRecipe;
