import StyledHomePage from "./style";
import { BiRefresh } from "../../index";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import { preferencesData } from "../../../data/foodTypes";

const PreferencesFilter = ({ handlePrefChange }) => {
  const { diet, health, meal, cuisine, dish, changePreferences } =
    useContext(AppContext);

  const filter = [diet, health, meal, cuisine, dish];

  return preferencesData.map((preference, index) => {
    const { label, id, name, icon, options } = preference;
    return (
      <StyledHomePage.Preferences
        className={`${filter[index] && "show"}`}
        key={index}
      >
        <label htmlFor={id} className={filter[index] && "show"}>
          {icon}
          {label}
        </label>
        <select
          className={filter[index] && "show"}
          name={name}
          id={id}
          value={filter[index]}
          onChange={handlePrefChange}
        >
          {options.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        {filter[index] && (
          <div className="icon" onClick={() => changePreferences(id, "")}>
            <BiRefresh />
          </div>
        )}
      </StyledHomePage.Preferences>
    );
  });
};

export default PreferencesFilter;
