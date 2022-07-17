import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/context";
import * as NavbarModule from "./index";

const Navbar = () => {
  const { email, isModal, lastQuery } = useContext(AppContext);
  const { loadingToFalse, handleError } = useContext(AppContext);
  const { clearQuery, handleQuery } = useContext(AppContext);

  const [showInfo, setShowInfo] = React.useState(true);

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

  if (!isModal && email) {
    return (
      <StyledSection>
        <NavbarModule.NavbarLogo clickEvent={handleClick} />
        <NavbarModule.NavbarForm changeQuery={changeQuery} />

        <NavbarModule.NavbarResults
          filterQuery={filterQuery}
          changeQuery={changeQuery}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
        <NavbarModule.NavbarInfoIcon
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
      </StyledSection>
    );
  }

  return <EmptyWrapper />;
};

const StyledSection = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const EmptyWrapper = styled.section`
  width: 100%;
  height: 10vh;
`;

export default Navbar;
