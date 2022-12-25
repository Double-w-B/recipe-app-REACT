import React from "react";
import * as Component from "./index";
import StyledHomePage from "./style";
import { AppContext } from "../../../context/context";

const Home = () => {
  const { email, minInput, maxInput, changePreferences } =
    React.useContext(AppContext);

  const [minPercent, setMinPercent] = React.useState("0");
  const [maxPercent, setMaxPercent] = React.useState("0");

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

      const timer = setTimeout(() => {
        Number(e.target.value) <= Number(minInput) &&
          changePreferences("maxInput", Number(minInput) + gap);

        Number(e.target.value) > Number(minInput) &&
          e.target.value <= 1000 &&
          changePreferences("maxInput", e.target.value);
      }, 700);

      !e.target.value && changePreferences("maxInput", "1000");
      return () => clearTimeout(timer);
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
        throw new Error("Switch in a Checkboxes");
    }
  };

  const initialState = {
    handlePrefChange,
    handleInput,
    checkRangeValue,
    minPercent,
    maxPercent,
  };

  if (!email) {
    return (
      <main>
        <StyledHomePage />
      </main>
    );
  }

  return (
    <main>
      <StyledHomePage>
        <StyledHomePage.Container className=" no-select">
          <Component.Preferences {...initialState} />
          <Component.Range {...initialState} />
        </StyledHomePage.Container>
      </StyledHomePage>
    </main>
  );
};

export default Home;
