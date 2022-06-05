import React, { useState } from "react";
import noImg from "../../images/no-img.jpg";

const RecipeIngredients = ({ found }) => {
  const [showText, setShowText] = useState(false);

  const checkAndShow = (e) =>
    e.currentTarget.lastChild.title.length > 30 && setShowText(!showText);

  const { ingredients } = found.recipe;

  return (
    <div className="ex-recipe-ingredients">
      <h2>Ingredients ({ingredients.length})</h2>
      <div className="underline"></div>
      <div className="ex-total-ingredients">
        {ingredients.map((item, index) => {
          const { image, foodCategory, text } = item;
          return (
            <div key={index} className="ex-ingredient" onClick={checkAndShow}>
              <div className="ex-ingredient-img no-select">
                <img src={!image ? noImg : image} alt={foodCategory} />
              </div>
              <p
                title={text}
                style={
                  text.length > 30
                    ? { cursor: "pointer" }
                    : { cursor: "default" }
                }
              >
                {text.length > 30
                  ? showText
                    ? text
                    : `${text.substring(0, 30)}...`
                  : text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeIngredients;
