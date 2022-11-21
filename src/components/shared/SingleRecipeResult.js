import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AppContext } from "../../context/context";
import logoPreloader from "../../images/preloader.webp";
import StyledSingleRecipeContainer from "./style/SingleRecipeResult.style";

const SingleRecipeResult = ({ item, id, type }) => {
  const { newPath, path, queryPath } = React.useContext(AppContext);
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

    const timer = setTimeout(() => {
      img.onload = onLoad();
    }, 100);
    return () => clearTimeout(timer);
  }, [image, onLoad]);

  const handleMouseDown = () => {
    if (type === "query") {
      newPath(id);
      sessionStorage.setItem("path", JSON.stringify(id));
      return;
    }
    return newLocalStrPath(id);
  };

  const setPath = () => {
    if (type === "query") return `/recipes/${queryPath}/${path}`;

    return `/savedrecipes/${localStrPath}`;
  };

  const checkLength = (label) => {
    const words = label.split(" ");
    return `${words.slice(0, 3).join(" ")}...`;
  };

  return (
    <StyledSingleRecipeContainer onMouseDown={handleMouseDown}>
      {<img src={recipeImg} alt="" />}

      <StyledSingleRecipeContainer.SingleRecipe>
        <div>
          <h4>{label.length > 35 ? checkLength(label) : label}</h4>
          <p>from {source}</p>
        </div>

        <Link to={setPath()} state={type}>
          <FiExternalLink />
        </Link>
      </StyledSingleRecipeContainer.SingleRecipe>
    </StyledSingleRecipeContainer>
  );
};

export default SingleRecipeResult;
