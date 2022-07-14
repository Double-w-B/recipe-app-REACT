import React from "react";
import InfoIcon from "../../images/info.png"
import { AppContext } from "../../context/context";

const NavbarInfoIcon = ({ showInfo, setShowInfo }) => {
  const { currentPath, queryPath } = React.useContext(AppContext);

  const firstPath = `/recipes/${queryPath}`;
  const secondPath = `/savedrecipes`;

  return (
    (currentPath === firstPath || currentPath === secondPath) && (
      <div
        className={
          showInfo
            ? "results--info-btn hide no-select"
            : "results--info-btn no-select"
        }
      >
        <img
          src={InfoIcon}
          alt="info icon"
          onClick={() => setShowInfo(!showInfo)}
        />
      </div>
    )
  );
};

export default NavbarInfoIcon;
