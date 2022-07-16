import React from "react";
import { BiTime } from "..";

const RecipeCookingTime = ({ totalTime }) => {
  if (totalTime / 60 > 0.1 && totalTime / 60 <= 0.99) {
    return (
      <p className="time">
        <BiTime />
        {String(totalTime)
          .slice(0, 1)
          .concat(
            String(totalTime).slice(1, 2) > 1
              ? "0"
              : String(totalTime).slice(1, 2)
          )}{" "}
        min
      </p>
    );
  }

  if (totalTime / 60 >= 1 && totalTime / 60 <= 9) {
    return (
      <p className="time">
        <BiTime />
        {Math.floor(totalTime / 60)}{" "}
        {Math.floor(totalTime / 60) === 1 ? "hr" : "hrs"}{" "}
        {String(totalTime % 60)
          .slice(0, 1)
          .concat(
            String(totalTime % 60).slice(1, 2) > 0
              ? "0"
              : String(totalTime % 60).slice(1, 2)
          )}{" "}
        {(String(totalTime % 60).slice(0, 1) ||
          String(totalTime % 60).slice(1, 2)) &&
          "min"}
      </p>
    );
  }

  if (totalTime / 60 >= 10) {
    return (
      <p className="time">
        <BiTime />
        {String(totalTime / 60).slice(0, 2)} hrs{" "}
        {String(totalTime % 60)
          .slice(0, 1)
          .concat(
            String(totalTime % 60).slice(1, 2) > 0
              ? "0"
              : String(totalTime % 60).slice(1, 2)
          )}{" "}
        {(String(totalTime % 60).slice(0, 1) ||
          String(totalTime % 60).slice(1, 2)) &&
          "min"}
      </p>
    );
  }

  return <p></p>;
};

export default RecipeCookingTime;
