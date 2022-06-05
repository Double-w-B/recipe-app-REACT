import React, { useContext } from "react";
import { SearchSingleResult, Loading, Error } from "../index";
import { AppContext } from "../../context/context";
import loading from "../../images/preloader.gif";

const SearchResults = () => {
  const { recipes, isLoading, isError, fetchRecipes, nextPageLoading } =
    useContext(AppContext);
  const { setNextPageLoading, changeThePage, page, nextPage, changeThePath } =
    useContext(AppContext);

  React.useEffect(() => {
    changeThePath("");
    setTimeout(() => {
      changeThePath(window.location.pathname);
    }, 500);
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setNextPageLoading();
    changeThePage(page + 1);
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

            return <SearchSingleResult key={id} item={item} id={id} />;
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

export default SearchResults;
