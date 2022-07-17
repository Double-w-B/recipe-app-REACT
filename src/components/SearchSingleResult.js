import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AppContext } from "../context/context";
import { checkLength } from "../helpers";
import logoPreloader from "../images/logoPreloader.png";

const SearchSingleResult = ({ item, id }) => {
  const { newPath, path, queryPath } = React.useContext(AppContext);
  const [recipeImg, setRecipeImg] = React.useState(logoPreloader);

  const {
    recipe: { image, label, source },
  } = item;

  const handleMouseDown = () => {
    newPath(id);
    localStorage.setItem("path", JSON.stringify(id));
  };

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
    <StyledSingleRecipeWrapper onMouseDown={handleMouseDown}>
      <img src={recipeImg} alt={label} />

      <StyledSingleRecipe>
        <div>
          <h4>{label.length > 35 ? checkLength(label) : label}</h4>
          <p>from {source}</p>
        </div>

        <Link to={`/recipes/${queryPath}/${path}`}>
          <FiExternalLink />
        </Link>
      </StyledSingleRecipe>
    </StyledSingleRecipeWrapper>
  );
};

export const StyledSingleRecipeWrapper = styled.article`
  min-width: 16rem;
  max-width: 16rem;
  max-height: 13rem;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  border: 10px solid var(--light-grey-bcg-clr);
  box-shadow: var(--secondary-shadow);

  &:hover {
    box-shadow: var(--tertiary-shadow);
  }

  &:hover div {
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: fill;
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: transparent;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0;
    color: var(--yellow-clr);
  }

  @media screen and (max-width: 1530px) {
    border: 8px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px) {
    border: 6px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 700px) {
    min-width: 15rem;
    max-width: 15em;
    max-height: 13rem;
  }

  @media screen and (max-width: 600px) {
    min-width: 19rem;
    max-width: 19em;
    max-height: 16rem;
  }

  @media screen and (max-width: 430px) {
    min-width: 17rem;
    max-width: 17em;
    max-height: 15rem;
  }
`;

export const StyledSingleRecipe = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  transform: translateY(100%);
  transition: var(--transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  &:hover a svg {
    color: var(--yellow-clr);
  }

  a {
    color: #fff;

    svg {
      width: 1.7rem;
      height: 1.7rem;
      margin: 0.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    transform: translateY(0);

    a {
      color: var(--yellow-clr);
    }
  }
`;

export default SearchSingleResult;
