import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import {
  RecipeIngredients,
  RecipeNutrition,
  RecipeInfo,
} from "../smallComponents";

const LocalExactRecipe = () => {
  const { localStrRecipes, setLocalStrRecipes, localStrPath, setLocalStrPath } =
    useContext(AppContext);

  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);

  const found = localStrRecipes.find((item) => {
    const { uri } = item.recipe;
    return uri.substring(51) === localStrPath;
  });

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

    checked && setLocalStrRecipes(filteredStorage());
    setLocalStrPath("myrecipes");
  };

  const { image, label } = found.recipe;

  return (
    <article key={localStrPath} className="ex-recipes-container">
      <div className="ex-recipe-center">
        <div className="ex-recipe-img">
          <img src={image} alt={label} />
        </div>

        <RecipeInfo checkStorage={checkStorage} found={found} />
        <RecipeNutrition found={found} />
        <RecipeIngredients found={found} />
      </div>
    </article>
  );
};

export default LocalExactRecipe;
