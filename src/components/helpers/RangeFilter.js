import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import { BiRefresh, HiOutlineCalculator } from "../";

const RangeFilter = ({
  checkRangeValue,
  handleInput,
  minPercent,
  maxPercent,
}) => {
  const { changePreferences, minInput, maxInput } = useContext(AppContext);

  const defaultRange = minInput > 0 || maxInput < 1000;

  const cleanUpCalories = () => {
    changePreferences("calories", "");
    changePreferences("minInput", "0");
    changePreferences("maxInput", "1000");
  };

  return (
    <Wrapper className={defaultRange && "show"}>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  min-width: 20rem;
  min-height: 17rem;
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

  .lastLabel {
    line-height: 1;
    margin-top: 2rem;
    display: block;
    align-items: center;
    font-size: 2.2rem;
    color: rgba(0, 0, 0, 0.7);
    transform: translateY(3rem);

    & *:first-child {
      color: var(--yellow-clr);
      margin-right: 1rem;
      transform: translateY(2px);
    }
    sup {
      letter-spacing: 0.5px;
      font-size: small;
      align-self: flex-end;
      opacity: 0;
    }
  }

  .inputs-wrapper {
    font-size: 1.5rem;
    opacity: 0;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    margin-top: 1.5rem;
    color: var(--yellow-clr);
    font-weight: bold;
    /* background-color: rgba(0, 0, 0, 0.8); */

    .num-inp-con {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* background-color: red; */
      .field {
        width: 44%;
        height: 80%;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &:last-child {
          justify-content: flex-start;
        }

        input {
          width: 50%;
          height: 100%;
          outline: none;
          font-size: 1.2rem;
          border-radius: 5px;
          text-align: center;
          border: 1px solid #999;
          -moz-appearance: textfield;
          color: rgba(0, 0, 0, 0.8);
          background-color: transparent;
          box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
          background-image: linear-gradient(
            to bottom,
            #ffffff 0%,
            #e5e5e55d 100%
          );
          cursor: pointer;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
    }

    .slider-con {
      width: 100%;
      height: 50%;
      /* background-color: rgba(0, 0, 0, 0.5); */
      padding: 1rem;

      .slider {
        height: 5px;
        position: relative;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
      .slider .progress {
        height: 100%;
        left: 0;
        right: 0;
        position: absolute;
        border-radius: 5px;
        background-color: var(--yellow-clr);
        transition: none;
      }

      .range-inputs {
        position: relative;

        input {
          position: absolute;
          width: 100%;
          height: 5px;
          top: -5px;
          left: 0;
          background: none;
          pointer-events: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background-color: #696969;
          pointer-events: auto;
          border: 0.5px solid #888888;
          -webkit-appearance: none;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          &:active {
            background-color: #888888;
          }
        }
        input[type="range"]::-moz-range-thumb {
          height: 15px;
          width: 15px;
          border: 0.5px solid #888888;
          border-radius: 50%;
          background-color: #696969;
          pointer-events: auto;
          -moz-appearance: none;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          &:active {
            background-color: #888888;
          }
        }
      }
    }
  }
  .inputs-wrapper.show,
  sup.show {
    opacity: 1;
  }

  .lastLabel.show {
    transform: translateY(1.1rem);
  }

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    sup,
    .inputs-wrapper {
      opacity: 1;
    }

    .lastLabel {
      transform: translateY(1.5rem);
    }
  }

  /* ----------- Media Queries ----------- */
  @media screen and (max-width: 1700px) {
    width: 19rem;
    min-width: 19rem;
    min-height: 16rem;
  }

  @media screen and (max-width: 1530px) {
    width: 16rem;
    min-width: 16rem;
    min-height: 13rem;
    .lastLabel {
      font-size: 2.1rem;
    }
    &:hover {
      .lastLabel {
        transform: translateY(1.1rem);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    border: 3px solid rgba(255, 255, 255, 0.1);

    & .inputs-wrapper .num-inp-con .field {
      height: 80%;
      input {
        font-size: 1.1rem;
      }
    }

    .lastLabel {
      font-size: 2rem;
    }

    &:hover {
      .lastLabel {
        transform: translateY(1.1rem);
      }
    }
  }

  @media screen and (max-width: 900px) {
    .lastLabel {
      & *:first-child {
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    border: 2px solid rgba(255, 255, 255, 0.4);

    .lastLabel {
      font-size: 1.8rem;
      transform: none;
      margin-top: 3.5rem;
    }

    .inputs-wrapper .num-inp-con .field input {
      font-size: 1.05rem;
    }

    .lastLabel sup,
    .inputs-wrapper {
      opacity: 1;
    }

    .lastLabel.show {
      transform: none;
    }

    &:hover {
      .lastLabel {
        transform: none;
      }
    }
  }

  @media screen and (max-width: 700px) {
    width: 15rem;
    min-width: 15rem;
    min-height: 13rem;

    .lastLabel {
      margin-top: 3rem;
    }

    .inputs-wrapper {
      margin-top: 0.2rem;
    }

    .inputs-wrapper .num-inp-con .field {
      height: 70%;
    }
    .inputs-wrapper .num-inp-con .field input {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 19rem;
    min-width: 19rem;
    min-height: 16rem;

    .lastLabel {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 17rem;
    min-width: 17rem;
    min-height: 15rem;
  }
`;

export default RangeFilter;
