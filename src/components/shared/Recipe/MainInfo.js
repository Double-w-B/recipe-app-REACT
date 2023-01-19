import React, { useState } from "react";
import StyledRecipe from "./style";
import CookingTime from "./CookingTime";
import * as Icons from "../../index";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";

const MainInfo = ({ found, type }) => {
  const navigate = useNavigate();
  const { userData } = React.useContext(AppContext);

  const [copied, setCopied] = useState(false);
  const [isRecipeStatusLoading, setIsRecipeStatusLoading] = useState(false);
  const [recipeStatus, setRecipeStatus] = useState(false);
  const recipeID = found.recipe.uri.split("_")[1];

  const { label, source, cuisineType, yield: portion } = found.recipe;
  const { dietLabels, mealType, calories, totalTime } = found.recipe;
  const { url, uri, healthLabels, image, totalNutrients, ingredients } =
    found.recipe;

  const recipeState = {
    recipeStatus,
    isRecipeStatusLoading,
  };

  React.useEffect(() => {
    if (type === "query") {
      checkRecipeStatus();
    }
    // eslint-disable-next-line
  }, []);

  //! API Requests - Start
  const checkRecipeStatus = async () => {
    setIsRecipeStatusLoading(true);

    const apiUrl = `/api/v1/recipes/${recipeID}`;

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      response.ok && setRecipeStatus(true);
      const timer = setTimeout(() => {
        setIsRecipeStatusLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };

  const addRecipeToDb = async () => {
    const recipe = {
      label,
      recipeID,
      image,
      source,
      cuisineType,
      yield: portion,
      dietLabels,
      mealType,
      calories,
      totalTime,
      url,
      uri,
      healthLabels,
      totalNutrients,
      ingredients,
    };

    const apiUrl = "/api/v1/recipes";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(recipe),
    };

    setIsRecipeStatusLoading(true);

    try {
      await fetch(apiUrl, requestOptions);
      const timer = setTimeout(() => {
        setRecipeStatus(true);
        setIsRecipeStatusLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };

  const removeRecipeFromDB = async () => {
    const apiUrl = `/api/v1/recipes/${recipeID}`;

    setIsRecipeStatusLoading(true);

    try {
      await fetch(apiUrl, { method: "DELETE" });

      const timer = setTimeout(() => {
        setRecipeStatus(false);
        setIsRecipeStatusLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Requests - End

  const handleSaveButtonClick = () => {
    if (type === "query") {
      recipeStatus ? removeRecipeFromDB() : addRecipeToDb();
      return;
    }

    removeRecipeFromDB();
    const timer = setTimeout(() => {
      navigate("/savedrecipes");
    }, 500);
    return () => clearTimeout(timer);
  };

  const buttonText = (recipeType) => {
    if (recipeType === "query") {
      return recipeStatus ? "SAVED" : "SAVE";
    }
    return "REMOVE";
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(timer);
  };

  return (
    <StyledRecipe.Info>
      {userData && (
        <StyledRecipe.SaveButton
          className="no-select"
          {...recipeState}
          onClick={handleSaveButtonClick}
        >
          {!isRecipeStatusLoading && buttonText(type)}
          {isRecipeStatusLoading && <img src={loadingSpinner} alt="" />}
        </StyledRecipe.SaveButton>
      )}

      <h1>{label}</h1>

      <StyledRecipe.ShortInfo>
        {totalTime > 0 && <CookingTime totalTime={totalTime} />}
        <p>
          <Icons.GiKnifeFork />
          {mealType[0]}
        </p>
        <p>
          <Icons.GiRiceCooker />
          {dietLabels
            .map((label) => label.toString().toLowerCase())
            .join(", ")}{" "}
          {cuisineType[0]} cuisine
        </p>
        <p title={`Total: ${Math.round(calories)} kcal`} className="calories">
          <Icons.HiOutlineCalculator />
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
            {source} <Icons.FiExternalLink />
          </a>
        </p>
        <button className="no-select" onClick={handleCopyButton}>
          {copied ? "Copied!" : "Copy link"}
        </button>
      </StyledRecipe.Link>
    </StyledRecipe.Info>
  );
};

export default MainInfo;
