import React from "react";
import { Link } from "react-router-dom";
import { StyledNoRecipes } from "./style/NoRecipes.style";
import recipeImg from "../../../images/recipe.png";

const NoRecipes = () => {
  const checkWindowSize = () => {
    if (window.innerWidth > 700) return <br />;
  };

  return (
    <StyledNoRecipes>
      <div>
        <h1>
          Add your first recipe to have it {checkWindowSize()}always by your
          side!
        </h1>
        <Link to="/">
          <img src={recipeImg} alt="icon" />
        </Link>
      </div>
    </StyledNoRecipes>
  );
};

export default NoRecipes;
