import React, { useContext } from "react";
import SingleRecipe from "./SingleRecipe";
import Loading from "./Loading";
import Error from "./Error";
import { AppContext } from "../context/context";
import loading from "../images/preloader.gif";

const Recipes = () => {
  const { recipes, isLoading, isError, fetchRecipes, nextPageLoading } =
    useContext(AppContext);
  const { setNextPageLoading, setPage, page, nextPage, setCurrentPath } =
    useContext(AppContext);

  React.useEffect(() => {
    setCurrentPath("");
    setTimeout(() => {
      setCurrentPath(window.location.pathname);
    }, 500);
  }, []);

  const handleClick = () => {
    setNextPageLoading(true);
    setPage(page + 1);
    fetchRecipes();
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <section className="recipes-container">
        <div className="results-container no-select">
          {recipes.map((item) => {
            const id = item.recipe.uri.substring(51);

            return <SingleRecipe key={id} item={item} id={id} />;
          })}

          {nextPage && (
            <div className="loadMore-btn">
              <div onClick={handleClick}>
                {nextPageLoading ? (
                  <img src={loading} alt="preloader" />
                ) : (
                  <p>
                    More
                    <br />
                    recipes
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Recipes;
