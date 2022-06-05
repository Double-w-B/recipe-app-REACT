import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../context/context";
import { NavbarResults, NavbarInfoIcon } from "./helpers";
import logo from "../images/logo.jpg";

const Navbar = () => {
  const { fetchRecipes, email, isModal, query, lastQuery } =
    useContext(AppContext);
  const { newQueryPath, isLoading, isError } = useContext(AppContext);
  const { loadingToFalse, handleError, createQuery } = useContext(AppContext);
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

  const handleSubmit = (e) => {
    if (!query) {
      e.preventDefault();
      return;
    }
    handleQuery(changeQuery(query));
    newQueryPath(changeQuery(query));
    localStorage.setItem("queryPath", JSON.stringify(changeQuery(query)));

    fetchRecipes();
    clearQuery();
  };

  const conditionalLink = () => {
    if (query) {
      return (
        <Link to={`/recipes/${changeQuery(query)}`} onClick={handleSubmit}>
          <button>
            <FaSearch />
          </button>
        </Link>
      );
    } else {
      return (
        <button type="submit">
          <FaSearch />
        </button>
      );
    }
  };

  if (!isModal && email) {
    return (
      <section className="navbar">
        <div className="logo no-select">
          <Link to="/">
            <img src={logo} alt="logo" onClick={handleClick} />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="recipe, ingredient, keyword ..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = "recipe, ingredient, keyword ...")
            }
            value={query}
            onChange={(e) => createQuery(e.target.value)}
            disabled={(isLoading || isError) && "disabled"}
            required
          />
          {conditionalLink()}
        </form>

        {/* {<div className="displayWidth">{width} px</div>} */}

        <NavbarResults
          filterQuery={filterQuery}
          changeQuery={changeQuery}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
        <NavbarInfoIcon showInfo={showInfo} setShowInfo={setShowInfo} />
      </section>
    );
  }

  return <Wrapper />;
};

const Wrapper = styled.section`
  width: 100%;
  height: 10vh;
`;

export default Navbar;
