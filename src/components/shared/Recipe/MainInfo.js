import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as IconsModule from "../../index";
import CookingTime from "./CookingTime";
import checkedIco from "../../../images/checked.png";
import uncheckedIco from "../../../images/unchecked.png";
import { AppContext } from "../../../context/context";

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
          <img
            src={checked ? checkedIco : uncheckedIco}
            alt=""
            onClick={handleClick}
          />
          <p>{checked ? "Saved!" : "Save"}</p>
        </>
      );
    } else {
      return (
        <>
          <Link to="/savedrecipes" onClick={handleClick}>
            <img src={checkedIco} alt="" />
          </Link>
          <p>Remove</p>
        </>
      );
    }
  };

  return (
    <StyledRecipeInfo>
      <StyledSaveBtnContainer
        checked={checked}
        currentPath={currentPath}
        className="no-select"
      >
        {createButton(type)}
      </StyledSaveBtnContainer>

      <h1>{label}</h1>

      <StyledShortInfo>
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
      </StyledShortInfo>

      <StyledHealthLabelsContainer>
        <p>{healthLabels.map((label) => label).join(", ")}</p>
      </StyledHealthLabelsContainer>

      <StyledLinkContainer copied={copied}>
        <p>
          Full recipe:
          <a href={url} target="_blank" rel="noopener noreferrer">
            {source} <IconsModule.FiExternalLink />
          </a>
        </p>
        <button className="no-select" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy link"}
        </button>
      </StyledLinkContainer>
    </StyledRecipeInfo>
  );
};

const StyledRecipeInfo = styled.div`
  cursor: default;
  grid-column: 2/4;
  grid-row: 1/2;
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  font-size: 1.2rem;
  position: relative;

  h1 {
    width: 80%;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    color: var(--red-clr);
    line-height: 1;
    font-size: 2rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 1100px) {
  }

  @media screen and (max-width: 900px) {
    grid-column: 1/6;
    grid-row: 1/2;
    margin-right: 0rem;
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;

    h1 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    font-size: 1rem;

    h1 {
      margin: 0.5rem 0 1rem 0;
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      margin: 0.5rem 0 1rem 0.5rem;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      margin-right: 1rem;
    }
  }
`;

const StyledSaveBtnContainer = styled.div`
  width: 12%;
  height: 20%;
  max-width: 55px;
  max-height: 55px;
  min-width: 45px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  background-color: ${(props) =>
    props.checked || props.currentPath === "/savedrecipes"
      ? "rgba(0, 0, 0, 0.4)"
      : "var(--light-grey-bcg-clr)"};
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    p {
      opacity: 1;
    }
  }

  a {
    display: grid;
    place-items: center;
  }

  img {
    cursor: pointer;
    width: 35px;
    transform: translateY(-1px);

    &:active {
      transform: scale(0.8);
    }
  }

  p {
    cursor: default;
    font-size: 0.9rem;
    position: absolute;
    bottom: -1.5rem;
    left: 50;
    opacity: 0;
  }

  @media screen and (max-width: 550px) {
    max-height: 50px;
    max-width: 50px;

    img {
      width: 30px;
    }

    p {
      opacity: 0;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

const StyledShortInfo = styled.div`
  width: 100%;
  text-transform: capitalize;
  margin-bottom: 1rem;

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  .time,
  .calories {
    text-transform: lowercase;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0.5rem;
  }
`;

const StyledHealthLabelsContainer = styled.div`
  cursor: default;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--olive-clr);
  box-shadow: var(--checkBox-shadow);

  p {
    overflow-wrap: break-word;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.95rem;
    padding: 0.5rem;
  }

  @media screen and (max-width: 900px) {
    margin: 0.5rem 0 1rem 0;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  align-items: center;
  font-size: 1.2rem;

  p {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--red-clr);
    font-style: italic;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;

    & *:last-child {
      margin-left: 0.5rem;
    }
  }

  button {
    width: 80px;
    padding: 0.3rem 0.2rem;
    border: none;
    border-radius: 0.1rem;
    outline: none;
    margin-left: 2rem;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    background-color: var(--olive-clr);
    box-shadow: var(--checkBox-shadow);
    transition: all 0.3s linear;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export default MainInfo;
