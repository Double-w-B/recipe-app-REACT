import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/context";
import * as Component from "./index";
import { useLocation } from "react-router-dom";

const Recipe = () => {
  const location = useLocation();
  const { path, recipes, setRecipe, changeThePath } = useContext(AppContext);
  const { localStrPath, newLocalStrPath } = useContext(AppContext);
  const { updateLocalStrRecipes, localStrRecipes, rotateStar } =
    useContext(AppContext);

  const [checked, setChecked] = useState(false);

  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  const allRecipes = location.state === "query" ? recipes : localStrRecipes;

  const found = allRecipes.find((item) => {
    const { uri } = item.recipe;
    if (location.state === "query") return uri.substring(51) === path;

    return uri.substring(51) === localStrPath;
  });

  React.useEffect(() => {
    if (location.state === "query") {
      changeThePath(window.location.pathname);
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (location.state === "query") {
      Object.values(localStrRecipes).find(
        (item) =>
          item.recipe.uri.substring(51) === found.recipe.uri.substring(51) &&
          setChecked(true)
      );
    }
  });

  const checkStorage = (found) => {
    const filteredStorage = () =>
      Object.values(localStrRecipes).filter(
        (item) =>
          item.recipe.uri.substring(51) !== found.recipe.uri.substring(51)
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

  const initialState = {
    checked,
    setChecked,
    found,
    checkStorage,
  };

  const { image } = found.recipe;

  return (
    <StyledRecipeWrapper>
      <StyledRecipeContainer>
        <StyledRecipeImg>
          <img src={image} alt="" />
        </StyledRecipeImg>

        <Component.MainInfo {...initialState} type={location.state} />
        <Component.Nutrition found={found} />
        <Component.Ingredients found={found} />
      </StyledRecipeContainer>
    </StyledRecipeWrapper>
  );
};

export const StyledRecipeWrapper = styled.article`
  padding: 4rem 7rem 3rem 7rem;
  min-height: 84vh;

  @media screen and (max-width: 1300px) {
    padding: 4rem 4.5rem 3rem 4.5rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 4rem 2.5rem 3rem 2.5rem;
  }

  @media screen and (max-width: 900px) {
    padding: 6rem 2.5rem 3rem 2.5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 6rem 1rem 3rem 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 6rem 0.5rem 3rem 0.5rem;
  }
`;

export const StyledRecipeContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4;
  background-color: var(--light-grey-bcg-clr);
  color: #000;
  box-shadow: var(--secondary-shadow);

  @media screen and (max-width: 1800px) {
    width: 75%;
  }

  @media screen and (max-width: 1700px) {
    width: 80%;
  }

  @media screen and (max-width: 1530px) {
    width: 85%;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 992px) {
    width: 95%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const StyledRecipeImg = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 0.2rem;
  box-shadow: var(--primary-shadow);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    grid-column: 2/5;
    grid-row: 2/3;
    max-height: 300px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 700px) {
    grid-column: 1/6;
    margin: 0.5rem 4rem;
  }

  @media screen and (max-width: 600px) {
    margin: 0.5rem 2rem;
  }

  @media screen and (max-width: 550px) {
    margin: 0.5rem 0;
  }
`;

export default Recipe;
