import React from "react";
import { AppContext } from "../../../context/context";
import * as Component from "./index";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import StyledRecipe from "./style";
import Loading from "../../Pages/Loading/Loading";
import Error from "../../Pages/Error/Error";

const Recipe = () => {
  const location = useLocation();
  const locationType = location.state.type;
  const recipeID = location.state.id;

  const { recipes, lastQuery, recipesAmount } = React.useContext(AppContext);

  const [isLoading, setIsLoading] = React.useState(setLoading());
  const [fetchedRecipe, setFetchedRecipe] = React.useState("");
  const found = locationType === "query" ? findRecipe() : fetchedRecipe;

  React.useEffect(() => {
    document.getElementById("root").scrollTo(0, 0);

    if (locationType !== "query") findRecipeInDB();
    // eslint-disable-next-line
  }, []);

  //! API Request - Start
  const findRecipeInDB = async () => {
    const apiUrl = `/api/v1/recipes/${recipeID}`;

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      const data = await response.json();

      if (!response.ok) {
        setFetchedRecipe("");
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setFetchedRecipe(data);
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Request - End

  function findRecipe() {
    return recipes.find((item) => item.recipe.uri.split("_")[1] === recipeID);
  }

  function setLoading() {
    return locationType === "query" ? false : true;
  }

  const checkPage = () => {
    if (locationType === "query") {
      return "query-recipe";
    }

    return "saved-recipe";
  };

  const initialState = {
    found,
  };

  if (!found && !isLoading) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navigation
        query={lastQuery}
        amount={recipesAmount}
        page={checkPage()}
        title={found?.recipe.label}
      />
      <StyledRecipe>
        <StyledRecipe.Container>
          <StyledRecipe.Image>
            <img src={found.recipe.image} alt="" />
          </StyledRecipe.Image>

          <Component.MainInfo {...initialState} type={locationType} />
          <Component.Nutrition found={found} />
          <Component.Ingredients found={found} />
        </StyledRecipe.Container>
      </StyledRecipe>
    </>
  );
};

export default Recipe;
