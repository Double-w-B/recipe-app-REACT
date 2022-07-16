import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as IconsModule from "..";
import RecipeCookingTime from "./RecipeCookingTime";
import checkedIco from "../../images/checked.png";
import uncheckedIco from "../../images/unchecked.png";
import { AppContext } from "../../context/context";

const RecipeInfo = ({ checked, setChecked, checkStorage, found }) => {
  const { currentPath } = useContext(AppContext);

  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const { label, source, cuisineType, yield: portion } = found.recipe;
  const { dietLabels, mealType, calories, totalTime } = found.recipe;
  const { url, healthLabels } = found.recipe;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const switchBackgroundClr = () => {
    if (checked) {
      return "checkbox-container background no-select";
    } else {
      return "checkbox-container no-select";
    }
  };

  return (
    <div className="ex-recipe-info">
      <div
        className={switchBackgroundClr()}
        style={{
          backgroundColor:
            currentPath === "/savedrecipes" ? "rgba(0,0,0,0.4)" : undefined,
        }}
      >
        {currentPath === "/savedrecipes" ? (
          <>
            <Link
              to="/savedrecipes"
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={checkedIco}
                alt="icon"
                onClick={() => {
                  checkStorage(found);
                }}
              />
            </Link>
            <p className={hover ? "show" : undefined}>Remove</p>
          </>
        ) : (
          <>
            <img
              src={checked ? checkedIco : uncheckedIco}
              alt="icon"
              onClick={() => {
                checkStorage(found);
                setChecked(!checked);
              }}
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
            <p className={hover ? "show" : undefined}>
              {checked ? "Saved!" : "Save"}
            </p>
          </>
        )}
      </div>
      <h1>{label}</h1>
      <div className="ex-short-info">
        {totalTime > 0 && <RecipeCookingTime totalTime={totalTime} />}
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
      </div>
      <div className="ex-health-labels">
        <p>{healthLabels.map((label) => label).join(", ")}</p>
      </div>
      <div className="link">
        <p>
          Full recipe:
          <a href={url} target="_blank" rel="noopener noreferrer">
            {source} <IconsModule.FiExternalLink />
          </a>
        </p>
        <div
          className="no-select"
          onClick={() => navigator.clipboard.writeText(url)}
        >
          <p onClick={handleCopy}>Copy link</p>
          <p className={copied ? "copied" : ""}>Copied!</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
