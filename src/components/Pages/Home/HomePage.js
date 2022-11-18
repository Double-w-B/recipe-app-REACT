import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StyledResultsWrapper } from "../QueryResults/QueryResultsPage";
import { AppContext } from "../../../context/context";
import * as FiltersModule from "./Filters";

const Home = () => {
  const { email, isModal, minInput, maxInput, changePreferences } =
    useContext(AppContext);
  const { changeThePath } = useContext(AppContext);

  const [minPercent, setMinPercent] = useState("0");
  const [maxPercent, setMaxPercent] = useState("0");

  React.useEffect(() => {
    changeThePath(window.location.pathname);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    const maxRange = 1000;
    setMinPercent(100 * (minInput / maxRange));
    setMaxPercent(100 - 100 * (maxInput / maxRange));
  }, [minInput, maxInput]);

  const checkRangeValue = (e) => {
    let gap = 50;

    if (e.target.name === "input-min") {
      Number(maxInput) - gap > Number(e.target.value) &&
        e.target.value > 0 &&
        e.target.value <= 980 &&
        changePreferences("minInput", e.target.value.replace(/^0+/, ""));

      e.target.value === "0" && changePreferences("minInput", e.target.value);

      !e.target.value && changePreferences("minInput", "0");
    }

    if (e.target.name === "input-max") {
      e.target.value <= 1000 &&
        changePreferences("maxInput", e.target.value.replace(/^0+/, ""));

      setTimeout(() => {
        Number(e.target.value) <= Number(minInput) &&
          changePreferences("maxInput", Number(minInput) + gap);

        Number(e.target.value) > Number(minInput) &&
          e.target.value <= 1000 &&
          changePreferences("maxInput", e.target.value);
      }, 700);

      !e.target.value && changePreferences("maxInput", "1000");
    }
  };

  const handleInput = (e) => {
    let gap = 50;

    e.target.name === "range-min" &&
      Number(e.target.value) + gap < Number(maxInput) &&
      changePreferences("minInput", e.target.value);

    e.target.name === "range-max" &&
      Number(e.target.value) > Number(minInput) + gap &&
      changePreferences("maxInput", e.target.value);
  };

  const handlePrefChange = (e) => {
    switch (e.target.name) {
      case "dietType":
        changePreferences("diet", e.target.value);
        break;
      case "healthLabel":
        changePreferences("health", e.target.value);
        break;
      case "mealType":
        changePreferences("meal", e.target.value);
        break;
      case "cuisineType":
        changePreferences("cuisine", e.target.value);
        break;
      case "dishType":
        changePreferences("dish", e.target.value);
        break;

      default:
        console.log("Switch in a Checkboxes");
    }
  };

  if (!isModal && email) {
    return (
      <main>
        <StyledFiltersWrapper>
          <StyledFiltersContainer className=" no-select">
            <FiltersModule.PreferencesFilter
              handlePrefChange={handlePrefChange}
            />
            <FiltersModule.RangeFilter
              handleInput={handleInput}
              checkRangeValue={checkRangeValue}
              minPercent={minPercent}
              maxPercent={maxPercent}
            />
          </StyledFiltersContainer>
        </StyledFiltersWrapper>
      </main>
    );
  }

  return (
    <main>
      <StyledEmptyWrapper />
    </main>
  );
};

const StyledFiltersWrapper = styled(StyledResultsWrapper)``;

const StyledFiltersContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  justify-items: center;

  @media screen and (max-width: 1920px) {
    width: 70%;
  }

  @media screen and (max-width: 1800px) {
    grid-gap: 1rem;
  }

  @media screen and (max-width: 1700px) {
    grid-gap: 0;
    width: 75%;
  }

  @media screen and (max-width: 1530px) {
    width: 85%;
  }

  @media screen and (max-width: 1300px) {
    width: 92%;
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 945px) {
    width: 80%;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

const StyledEmptyWrapper = styled.section`
  padding: 4rem 7rem 3rem 7rem;
  min-height: 84vh;
`;

export default Home;
