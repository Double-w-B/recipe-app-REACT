import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import * as Component from "./index";

const Navbar = () => {
  const { email, lastQuery } = useContext(AppContext);
  const { loadingToFalse, handleError } = useContext(AppContext);
  const { clearQuery, handleQuery } = useContext(AppContext);

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
    handleQuery("");
    clearQuery();
    loadingToFalse();
    handleError(false);
  };

  if (!email) {
    return <EmptyWrapper />;
  }

  return (
    <StyledSection>
      <Component.Logo clickEvent={handleClick} />
      <Component.SearchForm changeQuery={changeQuery} />
      <Component.MenuButton />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.3); */

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const EmptyWrapper = styled.section`
  width: 100%;
  height: 10vh;
`;

export default Navbar;
