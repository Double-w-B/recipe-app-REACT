import React from "react";
import styled from "styled-components";
import SingleIngredient from "./SingleIngredient";

const RecipeIngredients = ({ found }) => {
  const { ingredients } = found.recipe;

  return (
    <StyledIngredientsWrapper>
      <h2>Ingredients ({ingredients.length})</h2>
      <div className="underline"></div>

      <StyledIngredientsContainer>
        {ingredients.map((item, index) => {
          return <SingleIngredient key={index} {...item} />;
        })}
      </StyledIngredientsContainer>
    </StyledIngredientsWrapper>
  );
};

const StyledIngredientsWrapper = styled.div`
  cursor: default;
  grid-column: 2/4;
  grid-row: 2/4;

  h2 {
    margin-left: 0.5rem;
    color: #000;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    grid-row: 3/4;

    h2 {
      font-size: 1.4rem;
    }
  }
`;

const StyledIngredientsContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  place-content: center;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-template-rows: repeat(auto-fit, minmax(100px, 290px));
  background-color: var(--light-grey-bcg-clr);
  box-shadow: var(--primary-shadow);

  @media screen and (max-width: 1530px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 275px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 275px));
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 270px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 270px));
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 255px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 255px));
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 240px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 240px));
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 230px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 230px));
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 180px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 180px));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 160px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 160px));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 180px));
    grid-template-rows: repeat(auto-fit, minmax(140px, 180px));
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 155px));
    grid-template-rows: repeat(auto-fit, minmax(140px, 155px));
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 145px));
    grid-template-rows: repeat(auto-fit, minmax(140px, 145px));
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
    grid-template-rows: repeat(auto-fit, minmax(100px, 200px));
  }
`;

export default RecipeIngredients;
