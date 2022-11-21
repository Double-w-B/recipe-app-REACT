import React, { useState } from "react";
import StyledRecipe from "./style";

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
        <span key={index}>
          <span className="dot">•</span> {item.label}:{" "}
          {Math.round(item.quantity)} {item.unit}
        </span>
      );
    });
  };

  return (
    <StyledRecipe.Nutrition>
      <h2>Nutrition ({checkNutrients(totalNutrients).length}) </h2>
      <div className="underline"></div>

      <StyledRecipe.Nutrients>
        <p>{showNutrients()}</p>
      </StyledRecipe.Nutrients>

      <StyledRecipe.ShowMoreButton onClick={handleBtnClick}>
        {showMore ? "hide" : "show more"}
      </StyledRecipe.ShowMoreButton>
    </StyledRecipe.Nutrition>
  );
};

export default Nutrition;
