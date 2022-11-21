import React from "react";
import noImg from "../../../images/no-img.jpg";
import StyledRecipe from "./style";

const SingleIngredient = (props) => {
  const [showText, setShowText] = React.useState(false);

  const checkAndShow = (e) => {
    e.currentTarget.lastChild.title.length > 30 && setShowText(!showText);
  };

  const { image, text } = props;
  return (
    <StyledRecipe.Ingredient onClick={checkAndShow} text={text}>
      <StyledRecipe.IngredientImage className="no-select">
        <img src={!image ? noImg : image} alt="" />
      </StyledRecipe.IngredientImage>

      <p title={text}>
        {text.length > 30
          ? showText
            ? text
            : `${text.substring(0, 30)}...`
          : text}
      </p>
    </StyledRecipe.Ingredient>
  );
};

export default SingleIngredient;
