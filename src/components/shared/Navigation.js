import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import StyledNavigation from "./style/Navigation.style";
import iconKnife from "../../images/knife.png";

const Navigation = ({ query, amount, page, title }) => {
  const { queryPath } = React.useContext(AppContext);

  const filterQuery = (text) => {
    return text
      .replace(/[^0-9a-z]/gi, " ")
      .split(" ")
      .filter((word) => word.length > 0 && word);
  };

  const changeQuery = (someQuery) => {
    if (filterQuery(someQuery).length > 2) {
      return `${filterQuery(someQuery).slice(0, 2).join(" ")} ...`;
    } else {
      return filterQuery(someQuery).join(" ");
    }
  };

  const setNavigationPath = () => {
    if (page === "query") {
      return (
        <Fragment>
          <span title={filterQuery(query).join(", ")}>
            {changeQuery(query)}
          </span>
          <span className="amount">
            {`(${amount} ${
              amount.split(" ").join("") > 1 ? "recipes" : "recipe"
            })`}
          </span>
        </Fragment>
      );
    }

    if (page === "query-recipe") {
      return (
        <Link
          to={`/recipes/${queryPath}`}
          title={filterQuery(query).join(", ")}
        >
          {changeQuery(query)}
        </Link>
      );
    }

    if (page === "saved-recipe") {
      return <Link to={`/savedrecipes`}>Saved Recipes</Link>;
    }

    if (page === "storage") {
      return "Saved Recipes";
    }
  };

  return (
    <StyledNavigation>
      <p>
        <Link to="/" draggable="false">
          Home
        </Link>

        <span className="arrow">
          <img src={iconKnife} alt="" />
        </span>
        {setNavigationPath()}
        {title && (
          <Fragment>
            <span className="arrow">
              <img src={iconKnife} alt="" />
            </span>
            {title}
          </Fragment>
        )}
      </p>
    </StyledNavigation>
  );
};

export default Navigation;
