import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";
import star from "../images/checked.png";

const Navbar = () => {
  const { query, setQuery, fetchRecipes, email, isModal, recipesData } =
    useContext(AppContext);
  const { setQueryPath, isLoading, isError, lastQuery, setLastQuery } =
    useContext(AppContext);
  const { queryPath, currentPath, localStrPath, setIsError, setIsLoading } =
    useContext(AppContext);

  /*   const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }); */


  const changeQuery = (someQuery) => {
    const newQuery = someQuery
      .replace(/[^0-9a-z]/gi, " ")
      .split(" ")
      .filter((word) => word.length > 0 && word);

    if (someQuery === lastQuery) {
      return newQuery.join(" ");
    } else {
      return newQuery.join("+");
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
    const firstPath = `/recipes/${queryPath}`;
    const secondPath = `/savedrecipes`;
    const thirdPath = `/savedrecipes/${localStrPath}`;

    return (
      <section className="navbar">
        <div className="logo no-select">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              onClick={() => {
                setLastQuery("");
                setQuery("");
                setIsError(false);
                setIsLoading(false);
              }}
            />
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
        <div
          className={
            !isError &&
            !isLoading &&
            (currentPath === firstPath ||
              currentPath === secondPath ||
              currentPath === thirdPath)
              ? "results show no-select"
              : "results no-select"
          }
        >
          {currentPath === firstPath && (
            <>
              <p>
                {window.innerWidth > 430 && "Results for"}{" "}
                <span>{changeQuery(lastQuery)}</span>:{" "}
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
