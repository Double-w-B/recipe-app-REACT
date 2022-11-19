import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../../context/context";

const NavbarForm = (props) => {
  const { changeQuery } = props;
  const { fetchRecipes, query, createQuery } = useContext(AppContext);
  const { clearQuery, handleQuery } = useContext(AppContext);
  const { newQueryPath, isLoading, isError } = useContext(AppContext);

  const handleSubmit = (e) => {
    if (!query) {
      e.preventDefault();
      return;
    }

    handleQuery(changeQuery(query));
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
    <StyledForm onSubmit={handleSubmit}>
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
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-left: 3rem;
  display: flex;
  width: 45%;
  height: 50px;
  border: 2px solid var(--yellow-clr);
  box-shadow: var(--primary-shadow);
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  z-index: 2;

  input {
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    color: var(--red-clr);
    padding-left: 2rem;
    font-size: 1.5rem;
    text-transform: lowercase;
    background-color: transparent;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 0.3;
      /* Firefox */
      font-style: italic;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(0, 0, 0, 0.3);
      font-style: italic;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(0, 0, 0, 0.3);
      font-style: italic;
    }
  }

  a,
  button {
    width: 10%;
    height: 100%;
  }

  a button {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 1.5rem;
    color: var(--yellow-clr);
    cursor: pointer;
    background-color: transparent;
  }

  button {
    outline: none;
    border: none;
    font-size: 1.5rem;
    color: var(--yellow-clr);
    cursor: pointer;
    background-color: transparent;

    & svg {
      transform: translateY(2px);
    }
  }

  @media screen and (max-width: 1200px) {
    input {
      font-size: 1.45rem;
    }
  }

  @media screen and (max-width: 992px) {
    width: 50%;

    input {
      width: 85%;
      font-size: 1.45rem;
    }

    a,
    button {
      width: 15%;
    }
  }

  @media screen and (max-width: 900px) {
    width: 70%;
    margin-left: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -4.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 65%;

    input {
      padding-left: 1rem;
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80%;

    input {
      font-size: 1.35rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 76%;
    height: 40px;

    input {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;

    input {
      padding-left: 0.5rem;
    }
    button {
      font-size: 1.3rem;
    }
  }
`;

export default NavbarForm;
