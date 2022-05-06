import React, { useContext } from "react";
import styled from "styled-components";
import { preferencesData } from "../../data/foodTypes";
import { AppContext } from "../../context/context";
import { BiRefresh } from "../";
import sortIco from "../../images/sort-down.svg";

const PreferencesFilter = ({ handlePrefChange }) => {
  const { diet, health, meal, cuisine, dish, changePreferences } =
    useContext(AppContext);

  const filter = [diet, health, meal, cuisine, dish];

  return preferencesData.map((preference, index) => {
    const { label, id, name, icon, options } = preference;
    return (
      <Wrapper className={`${filter[index] && "show"}`} key={index}>
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
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  width: 16rem;
  min-width: 16rem;
  min-height: 13rem;
  margin: 1rem;
  background-color: rgba(245, 245, 245, 0.6);
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  &.show {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  .icon {
    font-size: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    color: var(--red-clr);
    cursor: pointer;
    &:active {
      transform: scale(0.5);
    }
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 70%;
    opacity: 0;
    cursor: pointer;
    display: block;
    padding-left: 0.3rem;
    font-size: 1.05rem;
    border: 1px solid #aaa;
    outline: none;
    border-radius: 0.3em;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.8);
    background-color: transparent;
    background-image: url(${sortIco}),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e55d 100%);
    background-repeat: no-repeat /* , repeat */;
    background-position: right 0.7em top 5%, 0 0;
    background-size: 0.65em auto, 100%;
  }
  option {
    font-family: "Century Gothic";
  }
  select option * {
    cursor: pointer;
  }
  label {
    line-height: 1;
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    color: rgba(0, 0, 0, 0.7);
    transform: translateY(3rem);
    & *:first-child {
      color: var(--yellow-clr);
      margin-right: 1rem;
    }
  }

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    select {
      opacity: 1;
    }

    label {
      transform: translateY(1.5rem);
    }
  }

  select.show {
    opacity: 1;
  }

  label.show {
    transform: translateY(1.1rem);
  }

  /* ----------- Media Queries ----------- */

  @media screen and (max-width: 1365px) {
    label {
      font-size: 2.1rem;
    }
    &:hover {
      label {
        transform: translateY(1.1rem);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    border: 3px solid rgba(255, 255, 255, 0.1);

    label {
      font-size: 2rem;
    }
    select {
      font-size: 1rem;
    }

    &:hover {
      label {
        transform: translateY(1.1rem);
      }
    }

    @media screen and (max-width: 768px) {
      border: 2px solid rgba(255, 255, 255, 0.4);

      label {
        font-size: 1.8rem;
        transform: none;
        margin-top: 2rem;
      }

      select {
        opacity: 1;
        width: 90%;
        font-size: 1rem;
      }

      &:hover {
        label {
          transform: none;
        }
      }

      label.show {
        transform: none;
      }
    }
    @media screen and (max-width: 700px) {
      width: 15rem;
      min-width: 15rem;
      min-height: 13rem;
    }
    @media screen and (max-width: 600px) {
      width: 19rem;
      min-width: 19rem;
      min-height: 16rem;

      label {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 430px) {
      width: 17rem;
      min-width: 17rem;
      min-height: 15rem;
    }
  }
`;

export default PreferencesFilter;
