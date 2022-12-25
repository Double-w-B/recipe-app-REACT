import React from "react";
import { Link } from "react-router-dom";
import recipeImg from "../../../images/recipe.png";
import { AppContext } from "../../../context/context";
import { StyledNoRecipes } from "./style/NoRecipes.style";

const NoRecipes = () => {
  const { userData } = React.useContext(AppContext);

  return (
    <StyledNoRecipes className="no-select">
      <div>
        <h1 style={{ whiteSpace: "pre-line" }}>
          {userData
            ? `Add your first recipe to have it \nalways by your side!`
            : `Log in to add recipes and have them \nalways by your side!`}
        </h1>
        <Link to="/">
          <img src={recipeImg} alt="icon" />
        </Link>
      </div>
    </StyledNoRecipes>
  );
};

export default NoRecipes;
