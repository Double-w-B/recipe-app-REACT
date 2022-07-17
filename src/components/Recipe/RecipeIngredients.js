import React, { useState } from "react";
import styled from "styled-components";
import noImg from "../../images/no-img.jpg";

const RecipeIngredients = ({ found }) => {
  const [showText, setShowText] = useState(false);

  const checkAndShow = (e) =>
    e.currentTarget.lastChild.title.length > 30 && setShowText(!showText);

  const { ingredients } = found.recipe;

  return (
    <StyledIngredientsWrapper>
      <h2>Ingredients ({ingredients.length})</h2>
      <div className="underline"></div>

      <StyledIngredientsContainer>
        {ingredients.map((item, index) => {
          const { image, foodCategory, text } = item;

          return (
            <StyledIngredient key={index} onClick={checkAndShow} text={text}>

              <StyledImgContainer className="no-select">
                <img src={!image ? noImg : image} alt={foodCategory} />
              </StyledImgContainer>

              <p title={text}>
                {text.length > 30
                  ? showText
                    ? text
                    : `${text.substring(0, 30)}...`
                  : text}
              </p>
            </StyledIngredient>
          );
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

const StyledIngredient = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover div {
    border: 2px solid black;
  }

  &:hover p {
    opacity: 1;
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    width: 100%;
    transition: all 0.1s ease-in-out;
    opacity: 0.65;
    cursor: ${(props) => (props.text.length > 30 ? "pointer" : "default")};
  }
`;

const StyledImgContainer = styled.div`
  width: 60%;
  border-radius: 50%;
  border: 2px solid var(--light-grey-bcg-clr);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    min-width: 100px;
    min-height: 100px;
  }

  @media screen and (max-width: 768px) {
    min-width: 90px;
    min-height: 90px;
  }

  @media screen and (max-width: 600px) {
    min-width: 80px;
    min-height: 80px;
  }
`;

export default RecipeIngredients;
