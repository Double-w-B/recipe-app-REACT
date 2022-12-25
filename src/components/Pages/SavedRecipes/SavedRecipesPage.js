import React from "react";
import * as Component from "./index";
import Loading from "../Loading/Loading";
import StyledSavedRecipesSection from "./style";
import Navigation from "../../shared/Navigation";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { SharedContainer } from "../../../styles/shared/SharedContainer.style";

const SavedRecipesResults = () => {
  const [isRecipesLoading, setIsRecipesLoading] = React.useState(true);
  const [savedRecipes, setSavedRecipes] = React.useState([]);

  React.useEffect(() => {
    getSavedRecipesFromDB();
    // eslint-disable-next-line
  }, []);

  //! API Request - Start
  const getSavedRecipesFromDB = async () => {
    const apiUrl = "/api/v1/recipes/";
    setIsRecipesLoading(true);
    try {
      const response = await fetch(apiUrl, { method: "GET" });
      const data = await response.json();

      if (!response.ok) {
        const timer = setTimeout(() => {
          setIsRecipesLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }

      const recipes = data.recipes.map((item) => {
        return { recipe: item };
      });

      const timer = setTimeout(() => {
        setSavedRecipes(recipes);
        setIsRecipesLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Request - End

  if (isRecipesLoading) {
    return <Loading />;
  }

  if (savedRecipes.length < 1) {
    return (
      <main>
        <Navigation page={"storage"} />
        <Component.NoRecipes />
      </main>
    );
  }

  if (savedRecipes.length > 0) {
    return (
      <main>
        <Navigation page={"storage"} />
        <StyledSavedRecipesSection>
          <SharedContainer className="no-select">
            {Object.values(savedRecipes).map((item) => {
              return (
                <SingleRecipeResult
                  key={item.recipe.recipeID}
                  item={item}
                  type={"saved"}
                />
              );
            })}
          </SharedContainer>
        </StyledSavedRecipesSection>
      </main>
    );
  }
};

export default SavedRecipesResults;
