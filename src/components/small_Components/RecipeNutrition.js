import React, { useState } from "react";

const RecipeNutrition = ({  found }) => {
  const [showMore, setShowMore] = useState(false);

    const showNutr = (value) => {
      return Object.values(value)
        .filter((nutrient) => nutrient.quantity.toFixed(2) > 0.5 && nutrient)
        .sort((a, b) => (a.label > b.label ? 1 : -1));
    };

  const { totalNutrients } = found.recipe;

  return (
    <div className="ex-recipe-nutrition">
      <h2>Nutrition</h2>
      <div className="underline"></div>
      <div className="ex-total-nutrients">
        {showMore
          ? showNutr(totalNutrients).map((item, index) => {
              return (
                <p key={index}>
                  • {item.label}: {Math.round(item.quantity)} {item.unit}
                </p>
              );
            })
          : showNutr(totalNutrients)
              .slice(0, 10)
              .map((item, index) => {
                return (
                  <p key={index}>
                    • {item.label}: {Math.round(item.quantity)} {item.unit}
                  </p>
                );
              })}
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            setShowMore(!showMore);
          }, 500);
        }}
      >
        {showMore ? "hide" : "show more"}
      </button>
    </div>
  );
};
export default RecipeNutrition;
