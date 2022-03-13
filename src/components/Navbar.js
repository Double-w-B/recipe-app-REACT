import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import { FaSearch } from "./index";
import { NavbarResults, NavbarInfoIcon } from "./smallComponents";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { query, setQuery, fetchRecipes, email, isModal } =
    useContext(AppContext);
  const { setQueryPath, isLoading, isError, lastQuery, setLastQuery } =
    useContext(AppContext);
  const { setIsError, setIsLoading } = useContext(AppContext);

  const [showInfo, setShowInfo] = React.useState(true);

  /*   const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }); */

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

  const handleSubmit = (e) => {
    if (!query) {
      e.preventDefault();
      return;
    }
    setLastQuery(changeQuery(query));
    setQueryPath(changeQuery(query));

    localStorage.setItem("queryPath", JSON.stringify(changeQuery(query)));

    fetchRecipes();
    setQuery("");
    setShowInfo(true);
  };

  const handleClick = () => {
    setLastQuery("");
    setQuery("");
    setIsError(false);
    setIsLoading(false);
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
            placeholder="find a recipe for your mood"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = "find a recipe for your mood")
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading || isError ? "disabled" : ""}
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
