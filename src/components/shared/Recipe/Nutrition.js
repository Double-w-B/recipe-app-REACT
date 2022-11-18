import React, { useState } from "react";
import styled from "styled-components";

const Nutrition = ({ found }) => {
  const [showMore, setShowMore] = useState(false);
  const { totalNutrients } = found.recipe;

  const handleBtnClick = () => {
    const timer = setTimeout(() => {
      setShowMore(!showMore);
    }, 300);
    return () => clearTimeout(timer);
  };

  const checkNutrients = (value) => {
    return Object.values(value)
      .filter((nutrient) => nutrient.quantity.toFixed(2) > 0.5 && nutrient)
      .sort((a, b) => (a.label > b.label ? 1 : -1));
  };

  const nutrients = showMore
    ? checkNutrients(totalNutrients)
    : checkNutrients(totalNutrients).slice(0, 10);

  const showNutrients = () => {
    return nutrients.map((item, index) => {
      return (
        <p key={index}>
          <span>•</span> {item.label}: {Math.round(item.quantity)} {item.unit}
        </p>
      );
    });
  };

  return (
    <StyledNutritionWrapper>
      <h2>Nutrition ({checkNutrients(totalNutrients).length}) </h2>
      <div className="underline"></div>

      <StyledNutrients>{showNutrients()}</StyledNutrients>

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
  box-shadow: var(--primary-shadow);

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
  padding: 0 0.5rem;

  p {
    letter-spacing: 0.5px;
    font-size: 1.1rem;
    margin-left: 0.5rem;
    line-height: 1.3;
    transition: all 0.3s linear;
    cursor: default;
    opacity: 0.8;

    span {
      color: var(--yellow-clr);
    }

    &:hover {
      opacity: 1;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

      span {
        color: var(--red-clr);
      }
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
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 0.2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  background-color: transparent;
  box-shadow: var(--checkBox-shadow);
  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
    background-color: rgba(246, 186, 5, 0.6);
    /* text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      1px 1px 1px rgba(0, 0, 0, 0.5); */
    box-shadow: var(--secondary-shadow);
  }

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 900px) {
    width: 30%;
    background-color: rgba(246, 186, 5, 0.6);
  }
`;
export default Nutrition;