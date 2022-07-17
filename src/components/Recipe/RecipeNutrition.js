import React, { useState } from "react";
import styled from "styled-components";

const RecipeNutrition = ({ found }) => {
  const [showMore, setShowMore] = useState(false);

  const showNutrients = (value) => {
    return Object.values(value)
      .filter((nutrient) => nutrient.quantity.toFixed(2) > 0.5 && nutrient)
      .sort((a, b) => (a.label > b.label ? 1 : -1));
  };

  const handleBtnClick = () => {
    setTimeout(() => {
      setShowMore(!showMore);
    }, 500);
  };

  const { totalNutrients } = found.recipe;

  return (
    <StyledNutritionWrapper>
      <h2>Nutrition ({showNutrients(totalNutrients).length}) </h2>
      <div className="underline"></div>

      <StyledNutrients>
        {showMore
          ? showNutrients(totalNutrients).map((item, index) => {
              return (
                <p key={index}>
                  <span>•</span> {item.label}: {Math.round(item.quantity)}{" "}
                  {item.unit}
                </p>
              );
            })
          : showNutrients(totalNutrients)
              .slice(0, 10)
              .map((item, index) => {
                return (
                  <p key={index}>
                    <span>•</span> {item.label}: {Math.round(item.quantity)}{" "}
                    {item.unit}
                  </p>
                );
              })}
      </StyledNutrients>

      <StyledButton onClick={handleBtnClick}>
        {showMore ? "hide" : "show more"}
      </StyledButton>
    </StyledNutritionWrapper>
  );
};

const StyledNutritionWrapper = styled.div`
  cursor: default;
  grid-column: 1/2;
  grid-row: 2/4;
  padding: 0.5rem 0;
  background-color: var(--light-grey-bcg-clr);

  h2 {
    color: #000;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    grid-row: 4/5;
  }
`;

const StyledNutrients = styled.div`
  width: 100%;

  p {
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    line-height: 1.3;
    transition: all 0.1s ease-in-out;
    cursor: default;
    opacity: 0.7;

    span {
      color: var(--yellow-clr);
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 1.05rem;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.div`
  width: 50%;
  padding: 0.2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(246, 186, 5, 0.6);
  }

  @media screen and (max-width: 900px) {
    width: 30%;
    background-color: rgba(246, 186, 5, 0.6);
  }
`;
export default RecipeNutrition;
