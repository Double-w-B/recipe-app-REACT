import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import * as Component from "./index";
import StyledNavbar from "./style";

const Navbar = () => {
  const { lastQuery, loadingToFalse, handleError } = useContext(AppContext);
  const { clearQuery, handleLastQuery } = useContext(AppContext);

  const filterQuery = (text) => {
    const newQuery = text
      .replace(/[^0-9a-z]/gi, " ")
      .split(" ")
      .filter((word) => word.length > 0 && word);

    return newQuery;
  };

  const changeQuery = (someQuery) => {
    if (someQuery === lastQuery) {
      if (filterQuery(someQuery).length > 2) {
        return `${filterQuery(someQuery).slice(0, 2).join(" ")} ... `;
      } else {
        return filterQuery(someQuery).join(" ");
      }
    } else {
      return filterQuery(someQuery).join("+");
    }
  };

  const handleClick = () => {
    handleLastQuery("");
    clearQuery();
    loadingToFalse();
    handleError(false);
  };

  return (
    <StyledNavbar>
      <Component.Logo clickEvent={handleClick} />
      <Component.SearchForm changeQuery={changeQuery} />
      <Component.MenuButton />
    </StyledNavbar>
  );
};

export default Navbar;
