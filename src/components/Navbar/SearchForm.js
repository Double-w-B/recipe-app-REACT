import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../../context/context";
import StyledNavbar from "./style";

const SearchForm = (props) => {
  const { changeQuery } = props;
  const { fetchRecipes, query, createQuery } = useContext(AppContext);
  const { newQueryPath, isLoading, isError } = useContext(AppContext);
  const { clearQuery, handleLastQuery } = useContext(AppContext);

  const handleSubmit = (e) => {
    if (!query) {
      e.preventDefault();
      return;
    }

    handleLastQuery(changeQuery(query));
    newQueryPath(changeQuery(query));
    sessionStorage.setItem("queryPath", JSON.stringify(changeQuery(query)));

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

  return (
    <StyledNavbar.SearchForm onSubmit={handleSubmit}>
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
    </StyledNavbar.SearchForm>
  );
};

export default SearchForm;
