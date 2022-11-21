import React, { useContext } from "react";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { AppContext } from "../../../context/context";
import Navigation from "../../shared/Navigation";
import { SharedContainer } from "../../../styles/shared/SharedContainer.style";
import { SharedSection } from "../../../styles/shared/SharedSection.style";
import * as Component from "./index";

const SavedRecipesResults = () => {
  const { localStrRecipes, changePath, currentPath } = useContext(AppContext);

  React.useEffect(() => {
    if (currentPath !== "/savedrecipes") {
      changePath("");
      const timer = setTimeout(() => {
        changePath(window.location.pathname);
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, []);

  if (localStrRecipes.length < 1) {
    return (
      <main>
        <Component.NoRecipes />
      </main>
    );
  }

  if (localStrRecipes.length > 0) {
    return (
      <main>
        <Navigation page={"storage"} />
        <SharedSection>
          <SharedContainer className="no-select">
            {Object.values(localStrRecipes).map((item) => {
              const id = item.recipe.uri.split("_")[1];
              return (
                <SingleRecipeResult
                  key={id}
                  item={item}
                  id={id}
                  type={"saved"}
                />
              );
            })}
          </SharedContainer>
        </SharedSection>
      </main>
    );
  }
};

export default SavedRecipesResults;
