import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { BiRefresh, HiOutlineCalculator } from "../../index";
import StyledHomePage from "./style";

const Range = ({ checkRangeValue, handleInput, minPercent, maxPercent }) => {
  const { changePreferences, minInput, maxInput } = useContext(AppContext);

  const defaultRange = minInput > 0 || maxInput < 1000;

  const cleanUpCalories = () => {
    changePreferences("calories", "");
    changePreferences("minInput", "0");
    changePreferences("maxInput", "1000");
  };

  return (
    <StyledHomePage.Range className={defaultRange && "show"}>
      <div
        htmlFor="calories"
        className={defaultRange ? "lastLabel show" : "lastLabel"}
      >
        <HiOutlineCalculator />
        Kcal
        <br /> <sup className={defaultRange ? "show" : ""}>
          (per serving)
        </sup>{" "}
      </div>
      <div className={defaultRange ? "inputs-wrapper show" : "inputs-wrapper"}>
        <div className="num-inp-con">
          <div className="field">
            <input
              type="number"
              name="input-min"
              value={minInput}
              onChange={checkRangeValue}
              onClick={(e) => e.target.select()}
            />
          </div>
          <div className="field">
            <input
              type="number"
              name="input-max"
              value={maxInput}
              onChange={checkRangeValue}
              onClick={(e) => e.target.select()}
            />
          </div>
        </div>

        <div className="slider-con">
          <div className="slider">
            <div
              className="progress"
              style={{
                left: `${minPercent}%`,
                right: `${maxPercent}%`,
              }}
            ></div>
          </div>

          <div className="range-inputs">
            <input
              type="range"
              name="range-min"
              min="0"
              max="1000"
              value={minInput}
              step="10"
              onChange={handleInput}
            />
            <input
              type="range"
              name="range-max"
              min="0"
              max="1000"
              value={maxInput}
              step="10"
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      {defaultRange && (
        <div className="icon" onClick={cleanUpCalories}>
          <BiRefresh />
        </div>
      )}
    </StyledHomePage.Range>
  );
};

export default Range;
