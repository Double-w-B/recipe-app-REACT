import React, { useContext } from "react";
import styled from "styled-components";
import * as StyledModule from "../Pages/SelectedRecipe";
import { AppContext } from "../../context/context";
import * as recipeModule from "../Recipe";

const SavedSelectedRecipe = () => {
  const { localStrRecipes, updateLocalStrRecipes, localStrPath } =
    useContext(AppContext);
  const { newLocalStrPath } = useContext(AppContext);

  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const found = localStrRecipes.find((item) => {
    const { uri } = item.recipe;
    return uri.substring(51) === localStrPath;
  });

  const checkStorage = (found) => {
    const filteredStorage = () =>
      Object.values(localStrRecipes).filter(
        (item) =>
          item.recipe.uri.substring(51) !== found.recipe.uri.substring(51)
      );
    updateLocalStrRecipes(filteredStorage());
    newLocalStrPath("removedRecipe");
  };

  const { image, label } = found.recipe;

  return (
    <StyledSavedRecipeWrapper key={localStrPath}>
      <StyledSavedRecipeContainer>
        <StyledSavedRecipeImg>
          <img src={image} alt={label} />
        </StyledSavedRecipeImg>

        <recipeModule.RecipeInfo checkStorage={checkStorage} found={found} />
        <recipeModule.RecipeNutrition found={found} />
        <recipeModule.RecipeIngredients found={found} />
      </StyledSavedRecipeContainer>
    </StyledSavedRecipeWrapper>
  );
};
const StyledSavedRecipeWrapper = styled(StyledModule.StyledRecipeWrapper)``;
const StyledSavedRecipeContainer = styled(StyledModule.StyledRecipeContainer)``;
const StyledSavedRecipeImg = styled(StyledModule.StyledRecipeImg)``;

export default SavedSelectedRecipe;
