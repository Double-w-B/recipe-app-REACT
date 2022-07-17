import React from "react";
import styled from "styled-components";
import * as StyledModule from "../SearchSingleResult";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AppContext } from "../../context/context";
import { checkLength } from "../../helpers";
import logoPreloader from "../../images/logoPreloader.png";

const SavedSingleRecipe = ({ item, id }) => {
  const { localStrPath, newLocalStrPath } = React.useContext(AppContext);
  const [recipeImg, setRecipeImg] = React.useState(logoPreloader);

  const {
    recipe: { image, label, source },
  } = item;
  
  const onLoad = React.useCallback(() => {
    setRecipeImg(image);
  }, [image]);

  React.useEffect(() => {
    const img = new Image();
    img.src = image;
    setTimeout(() => {
      img.onload = onLoad();
    }, 100);
  }, [image, onLoad]);

  return (
    <StyledSavedSingleRecipeWrapper onMouseDown={() => newLocalStrPath(id)}>
      <img src={recipeImg} alt={label} />
      <StyledSingleRecipeContainer>
        <div>
          <h4>{label.length > 35 ? checkLength(label) : label}</h4>
          <p>from {source}</p>
        </div>
        <Link to={`/savedrecipes/${localStrPath}`}>
          <FiExternalLink className="single-rec-link-img" />
        </Link>
      </StyledSingleRecipeContainer>
    </StyledSavedSingleRecipeWrapper>
  );
};

const StyledSavedSingleRecipeWrapper = styled(StyledModule.StyledSingleRecipeWrapper)``;
const StyledSingleRecipeContainer = styled(StyledModule.StyledSingleRecipe)``;
export default SavedSingleRecipe;
