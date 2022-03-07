import React, { useState, useContext } from "react";
import { AppContext } from "../context/context";
import {
  RecipeInfo,
  RecipeNutrition,
  RecipeIngredients,
} from "./smallComponents";

const ExactRecipe = () => {
  const { path, recipes, setRecipe, setCurrentPath } = useContext(AppContext);
  const { setLocalStrRecipes, localStrRecipes, setRotate } =
    useContext(AppContext);

  const [checked, setChecked] = useState(false);

  const found = recipes.find((item) => {
    const { uri } = item.recipe;
    return uri.substring(51) === path;
  });

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
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
      setLocalStrRecipes(filteredStorage());
      setRecipe("");
    }

    if (!checked) {
      setLocalStrRecipes([...localStrRecipes, found]);
      setRotate(true);

      setTimeout(() => {
        setRotate(false);
      }, 300);
    }
  };

  const { image, label } = found.recipe;

  return (
    <article key={path} className="ex-recipes-container">
      <div className="ex-recipe-center">
        <div className="ex-recipe-img">
          <img src={image} alt={label} />
        </div>

        <RecipeInfo
          checked={checked}
          setChecked={setChecked}
          checkStorage={checkStorage}
          found={found}
        />
        <RecipeNutrition found={found} />
        <RecipeIngredients found={found} />
      </div>
    </article>
  );
};

export default ExactRecipe;
