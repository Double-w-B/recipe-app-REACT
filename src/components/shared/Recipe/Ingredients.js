import React from "react";
import StyledRecipe from "./style";
import SingleIngredient from "./SingleIngredient";

const RecipeIngredients = ({ found }) => {
  const { ingredients } = found.recipe;

  return (
    <StyledRecipe.Ingredients>
      <h2>Ingredients ({ingredients.length})</h2>
      <div className="underline"></div>

      <StyledRecipe.IngredientsContainer>
        {ingredients.map((item, index) => {
          return <SingleIngredient key={index} {...item} />;
        })}
      </StyledRecipe.IngredientsContainer>
    </StyledRecipe.Ingredients>
  );
};

export default RecipeIngredients;
