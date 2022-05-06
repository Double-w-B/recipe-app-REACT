import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiKnifeFork, GiRiceCooker } from "../";
import { FiExternalLink, HiOutlineCalculator } from "../";
import CookingTime from "../small_Components/CookingTime";
import checkedIco from "../../images/checked.png";
import uncheckedIco from "../../images/unchecked.png";
import { AppContext } from "../../context/context";

const RecipeInfo = ({ checked, setChecked, checkStorage, found }) => {
  const { currentPath } = useContext(AppContext);

  const [copied, setCopied] = useState(false);

  const { label, source, cuisineType, yield: portion } = found.recipe;
  const { dietLabels, mealType, calories, totalTime } = found.recipe;
  const { url, healthLabels } = found.recipe;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="ex-recipe-info">
      <div className="checkbox-container no-select">
        {currentPath === "/savedrecipes" ? (
          <>
            <Link to="/savedrecipes">
              <img
                src={checkedIco}
                alt="icon"
                onClick={() => {
                  checkStorage(found);
                }}
              />
            </Link>
            <p>Remove</p>
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
            />
            <p>{checked ? "Saved!" : "Save"}</p>
          </>
        )}
      </div>
      <h1>{label}</h1>

      <div className="ex-short-info">
        {totalTime > 0 && <CookingTime totalTime={totalTime} />}
        <p>
          <GiKnifeFork />
          {mealType[0]}
        </p>
        <p>
          <GiRiceCooker />
          {dietLabels
            .map((label) => label.toString().toLowerCase())
            .join(", ")}{" "}
          {cuisineType[0]} cuisine
        </p>
        <p title={`Total: ${Math.round(calories)} kcal`} className="calories">
          <HiOutlineCalculator />
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
            {source} <FiExternalLink />
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
