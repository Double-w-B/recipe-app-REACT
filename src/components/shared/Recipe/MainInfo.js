import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as IconsModule from "../../index";
import CookingTime from "./CookingTime";
import { AppContext } from "../../../context/context";
import StyledRecipe from "./style";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const MainInfo = ({ checked, setChecked, checkStorage, found, type }) => {
  const { currentPath } = useContext(AppContext);

  const [copied, setCopied] = useState(false);

  const { label, source, cuisineType, yield: portion } = found.recipe;
  const { dietLabels, mealType, calories, totalTime } = found.recipe;
  const { url, healthLabels } = found.recipe;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(timer);
  };

  const handleClick = () => {
    if (type === "query") {
      checkStorage(found);
      setChecked(!checked);
    } else {
      checkStorage(found);
    }
  };

  const createButton = (type) => {
    if (type === "query") {
      return (
        <>
          {checked ? (
            <AiFillHeart onClick={handleClick} />
          ) : (
            <AiOutlineHeart onClick={handleClick} />
          )}
          <p>{checked ? "Saved!" : "Save"}</p>
        </>
      );
    } else {
      return (
        <>
          <Link to="/savedrecipes" onClick={handleClick}>
            <AiFillHeart />
          </Link>
          <p>Remove</p>
        </>
      );
    }
  };

  return (
    <StyledRecipe.Info>
      <StyledRecipe.SaveButton
        saved={checked}
        currentPath={currentPath}
        className="no-select"
      >
        {createButton(type)}
      </StyledRecipe.SaveButton>

      <h1>{label}</h1>

      <StyledRecipe.ShortInfo>
        {totalTime > 0 && <CookingTime totalTime={totalTime} />}
        <p>
          <IconsModule.GiKnifeFork />
          {mealType[0]}
        </p>
        <p>
          <IconsModule.GiRiceCooker />
          {dietLabels
            .map((label) => label.toString().toLowerCase())
            .join(", ")}{" "}
          {cuisineType[0]} cuisine
        </p>
        <p title={`Total: ${Math.round(calories)} kcal`} className="calories">
          <IconsModule.HiOutlineCalculator />
          {Math.round(calories / portion)} kcal (per serving)
        </p>
      </StyledRecipe.ShortInfo>

      <StyledRecipe.HealthLabels>
        <p>{healthLabels.map((label) => label).join(", ")}</p>
      </StyledRecipe.HealthLabels>

      <StyledRecipe.Link copied={copied}>
        <p>
          Full recipe:
          <a href={url} target="_blank" rel="noopener noreferrer">
            {source} <IconsModule.FiExternalLink />
          </a>
        </p>
        <button className="no-select" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy link"}
        </button>
      </StyledRecipe.Link>
    </StyledRecipe.Info>
  );
};

export default MainInfo;
