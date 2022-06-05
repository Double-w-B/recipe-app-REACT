import React from "react";
import star from "../../images/checked.png";
import { AppContext } from "../../context/context";

const NavbarResults = ({ filterQuery, changeQuery, showInfo, setShowInfo }) => {
  const { recipesData, queryPath, localStrPath, isError, isLoading } =
    React.useContext(AppContext);
  const { currentPath, lastQuery } = React.useContext(AppContext);

  const firstPath = `/recipes/${queryPath}`;
  const secondPath = `/savedrecipes`;
  const thirdPath = `/savedrecipes/${localStrPath}`;

  return (
    <div
      className={
        !isError &&
        !isLoading &&
        showInfo &&
        (currentPath === firstPath ||
          currentPath === secondPath ||
          currentPath === thirdPath)
          ? "results show no-select"
          : "results no-select"
      }
      onClick={() => setShowInfo(!showInfo)}
    >
      {currentPath === firstPath && (
        <>
          <p>
            {window.innerWidth > 430 && "Results for"}{" "}
            <span title={`${filterQuery(lastQuery).join(" ")}`}>
              {changeQuery(lastQuery)}
            </span>
            :{" "}
          </p>
          <p>
            {recipesData &&
              recipesData.count
                .toString()
                .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")}{" "}
            recipes
          </p>
        </>
      )}
      {(currentPath === secondPath || currentPath === thirdPath) && (
        <p
          className="saved-rec"
          style={{ textAlign: "center", marginRight: "0.5rem" }}
        >
          <img src={star} alt="star" /> Saved{" "}
          {window.innerWidth < 400 && <br />} Recipes
        </p>
      )}
    </div>
  );
};

export default NavbarResults;
