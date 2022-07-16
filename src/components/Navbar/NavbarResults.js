import React, { useContext } from "react";
import styled from "styled-components";
import star from "../../images/checked.png";
import { AppContext } from "../../context/context";

const NavbarResults = ({ filterQuery, changeQuery, showInfo, setShowInfo }) => {
  const { queryPath, localStrPath, isError, isLoading } =
    useContext(AppContext);
  const { currentPath, lastQuery, recipesData } = useContext(AppContext);

  const firstPath = `/recipes/${queryPath}`;
  const secondPath = `/savedrecipes`;
  const thirdPath = `/savedrecipes/${localStrPath}`;

  return (
    <StyledContainer
      className={
        !isError &&
        !isLoading &&
        showInfo &&
        (currentPath === firstPath ||
          currentPath === secondPath ||
          currentPath === thirdPath)
          ? "show no-select"
          : "no-select"
      }
      onClick={() => setShowInfo(!showInfo)}
    >
      {currentPath === firstPath && (
        <>
          <p>
            {window.innerWidth > 430 && "Results for"}{" "}
            <span title={`${filterQuery(lastQuery).join(" ")}`}>
              {changeQuery(lastQuery)}
            </span>
            :{" "}
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
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-height: 3rem;
  padding: 0.2rem 0.5rem 0.2rem 0.8rem;
  display: grid;
  place-content: center;
  border-radius: 1rem 0 0 1rem;
  color: #fff;
  position: absolute;
  right: -100%;
  top: 0.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-out;
  opacity: 0;

  p.saved-rec {
    display: flex;
    align-items: center;
    font-size: 1.25rem;

    img {
      margin-right: 0.5rem;
      width: 30px;
    }
  }

  p span {
    font-size: 1.2rem;
    color: #f5c855;
    font-style: italic;
    font-weight: bold;
    text-transform: lowercase;
  }

  &.show {
    right: 0;
    opacity: 1;
  }

  @media screen and (max-width: 900px) {
    p.saved-rec {
      font-size: 1.2rem;

      img {
        width: 25px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    p.saved-rec {
      font-size: 1.1rem;
      img {
        width: 23px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;

    p span {
      font-size: 1rem;
    }

    p.saved-rec {
      font-size: 1rem;
      flex-direction: row;

      img {
        width: 20px;
        margin-right: 0.2rem;
      }
    }
  }

  @media screen and (max-width: 430px) {
    p.saved-rec {
      font-size: 0.9rem;
      flex-direction: column;

      img {
        width: 23px;
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.1rem 0.3rem 0.5rem;

    p span {
      font-size: 1rem;
    }
  }
`;

export default NavbarResults;
