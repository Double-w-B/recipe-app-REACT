import React, {useContext} from "react";
import styled from "styled-components";
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

  // const uniqueRecipes = [...new Map(Object.values(recipes).map(item => [item.recipe["uri"], item])).values()];


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

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 2.2rem;
  margin: 1rem;
  border: 10px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  div {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.25);
    &:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
      background-color: rgba(0, 0, 0, 0.2);
    }
    &:active * {
      transform: scale(0.95);
    }
    img {
      width: 70%;
    }
  }
  @media screen and (max-width: 1365px) {
    width: 28%;
    max-height: 14rem;
  }
  @media screen and (max-width: 1200px) {
    border: 8px solid rgba(255, 255, 255, 0.1);
    max-height: 13.2rem;
  }
  @media screen and (max-width: 900px) {
    width: 44%;
    max-height: 18rem;
  }
  @media screen and (max-width: 768px) {
    width: 42%;
    max-height: 15rem;
    border: 6px solid rgba(255, 255, 255, 0.1);
  }
  @media screen and (max-width: 700px) {
    width: 43%;
    max-height: 13rem;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    min-height: 18rem;
    max-height: 18rem;
  }
  @media screen and (max-width: 550px) {
    min-height: 16rem;
    max-height: 17rem;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    min-height: 14rem;
    max-height: 15rem;
  }
`;

export default Recipes;
