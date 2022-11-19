import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../context/context";

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
        <p title={filterQuery(query).join(", ")}>
          {`${changeQuery(query)} (${amount} ${
            amount.split(" ").join("") > 1 ? "recipes" : "recipe"
          })`}
        </p>
      );
    }

    if (page === "query-recipe") {
      return (
        <p>
          <Link
            to={`/recipes/${queryPath}`}
            title={filterQuery(query).join(", ")}
          >
            {changeQuery(query)}
          </Link>
        </p>
      );
    }

    if (page === "saved-recipe") {
      return (
        <p>
          <Link to={`/savedrecipes`}>Saved Recipes</Link>
        </p>
      );
    }

    if (page === "storage") {
      return <p>Saved Recipes</p>;
    }
  };

  return (
    <StyledNavigation>
      <p>
        <Link to="/" draggable="false">
          Home
        </Link>
      </p>
      <p className="arrow">&gt;</p>
      {setNavigationPath()}
      {title && (
        <>
          <p className="arrow">&gt;</p>
          <p>
            <span>{title}</span>
          </p>
        </>
      )}
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  width: 65%;
  margin: 3rem auto;
  display: flex;
  color: var(--red-clr);
  /* background-color: gray; */

  a {
    color: var(--red-clr);
    font-weight: bold;
    transition: all 0.3s linear;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0px;
      height: 100%;
      display: block;
      transition: 300ms;
      background-color: var(--light-grey-bcg-clr);
      z-index: -1;
    }

    &:hover::after {
      width: 100%;
    }
  }

  p {
    font-size: 1.4rem;
    color: var(--red-clr);
    font-weight: bold;
    cursor: default;

    &:nth-child(2) {
    }

    &.arrow {
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.7);
      margin: 0 0.5rem;
      font-weight: normal;
    }
  }
`;
export default Navigation;
