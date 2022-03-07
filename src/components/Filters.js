import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { PreferencesFilter, RangeFilter } from "./smallComponents";

const Filters = () => {
  const { isModal, email } = useContext(AppContext);
  const { setCurrentPath, minInput, setMinInput, maxInput, setMaxInput } =
    useContext(AppContext);

  const [minPercent, setMinPercent] = useState("0");
  const [maxPercent, setMaxPercent] = useState("0");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
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
      if (
        Number(maxInput) - gap > Number(e.target.value) &&
        e.target.value > 0 &&
        e.target.value <= 980
      ) {
        setMinInput(e.target.value.replace(/^0+/, ""));
      }

      e.target.value === "0" && setMinInput(e.target.value);

      !e.target.value && setMinInput("0");
    }

    if (e.target.name === "input-max") {
      e.target.value <= 1000 && setMaxInput(e.target.value.replace(/^0+/, ""));

      setTimeout(() => {
        Number(e.target.value) <= Number(minInput) &&
          setMaxInput(Number(minInput) + gap);

        Number(e.target.value) > Number(minInput) &&
          e.target.value <= 1000 &&
          setMaxInput(e.target.value);
      }, 700);

      !e.target.value && setMaxInput("1000");
    }
  };

  const handleInput = (e) => {
    let gap = 50;

    e.target.name === "range-min" &&
      Number(e.target.value) + gap < Number(maxInput) &&
      setMinInput(e.target.value);

    e.target.name === "range-max" &&
      Number(e.target.value) > Number(minInput) + gap &&
      setMaxInput(e.target.value);
  };

  if (!isModal && email) {
    return (
      <main>
        <section className="recipes-container">
          <div className="recipes-center no-select">
            <PreferencesFilter />
            <RangeFilter
              handleInput={handleInput}
              checkRangeValue={checkRangeValue}
              minPercent={minPercent}
              maxPercent={maxPercent}
            />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="ex-recipes-container">
        <div className="recipes-center"></div>
      </section>
    </main>
  );
};

export default Filters;
