import React, { useState, useContext } from "react";
import { AppContext } from "../../../context/context";
import * as Component from "./index";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import StyledRecipe from "./style";

const Recipe = () => {
  const location = useLocation();
  const { path, recipes, setRecipe, changePath } = useContext(AppContext);
  const { localStrPath, newLocalStrPath } = useContext(AppContext);
  const { updateLocalStrRecipes, localStrRecipes, rotateStar } =
    useContext(AppContext);
  const { lastQuery, recipesAmount } = useContext(AppContext);

  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  const allRecipes = location.state === "query" ? recipes : localStrRecipes;

  const found = allRecipes.find((item) => {
    const { uri } = item.recipe;
    if (location.state === "query") return uri.split("_")[1] === path;
    return uri.split("_")[1] === localStrPath;
  });

  React.useEffect(() => {
    if (location.state === "query") {
      changePath(window.location.pathname);
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (location.state === "query") {
      Object.values(localStrRecipes).find(
        (item) =>
          item.recipe.uri.split("_")[1] === found.recipe.uri.split("_")[1] &&
          setChecked(true)
      );
    }
  });

  const checkStorage = (found) => {
    const filteredStorage = () =>
      Object.values(localStrRecipes).filter(
        (item) =>
          item.recipe.uri.split("_")[1] !== found.recipe.uri.split("_")[1]
      );

    if (location.state === "query" && checked) {
      updateLocalStrRecipes(filteredStorage());
      setRecipe("");
      return;
    }

    if (location.state === "query" && !checked) {
      updateLocalStrRecipes([...localStrRecipes, found]);
      rotateStar();
      return;
    }

    updateLocalStrRecipes(filteredStorage());
    newLocalStrPath("removedRecipe");
  };
  const checkPage = () => {
    if (location.state === "query") {
      return "query-recipe";
    } else {
      return "saved-recipe";
    }
  };

  const initialState = {
    checked,
    setChecked,
    found,
    checkStorage,
  };

  const { image } = found.recipe;

  return (
    <>
      <Navigation
        query={lastQuery}
        amount={recipesAmount}
        page={checkPage()}
        title={found.recipe.label}
      />
      <StyledRecipe>
        <StyledRecipe.Container>
          <StyledRecipe.Image>
            <img src={image} alt="" />
          </StyledRecipe.Image>

          <Component.MainInfo {...initialState} type={location.state} />
          <Component.Nutrition found={found} />
          <Component.Ingredients found={found} />
        </StyledRecipe.Container>
      </StyledRecipe>
    </>
  );
};

export default Recipe;
