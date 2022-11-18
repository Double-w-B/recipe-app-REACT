import React, { useContext } from "react";
import styled from "styled-components";
import { Loading, Error } from "../../index";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { AppContext } from "../../../context/context";
import loading from "../../../images/preloader.gif";

const QueryResults = () => {
  const { recipes, isLoading, isError, fetchRecipes, nextPageLoading } =
    useContext(AppContext);
  const { setNextPageLoading, changeThePage, page, nextPage, changeThePath } =
    useContext(AppContext);

  React.useEffect(() => {
    changeThePath("");
    setTimeout(() => {
      changeThePath(window.location.pathname);
    }, 500);
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setNextPageLoading();
    changeThePage(page + 1);
    fetchRecipes();
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <StyledResultsWrapper>
        <StyledResultsContainer className="no-select">
          {recipes.map((item, index) => {
            const id = item.recipe.uri.substring(51);

            return (
              <SingleRecipeResult key={id} item={item} id={id} type={"query"} />
            );
          })}

          {nextPage && (
            <StyledLoadMoreBtn>
              <div onClick={handleClick}>
                {nextPageLoading ? (
                  <img src={loading} alt="preloader" />
                ) : (
                  <p>
                    Load
                    <br />
                    more
                  </p>
                )}
              </div>
            </StyledLoadMoreBtn>
          )}
        </StyledResultsContainer>
      </StyledResultsWrapper>
    </main>
  );
};

export const StyledResultsWrapper = styled.section`
  padding: 3rem 7rem 3rem 7rem;
  min-height: 84vh;
  display: grid;
  place-items: center;

  @media screen and (max-width: 1530px) {
    padding: 3rem 7rem 0.5rem 7rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem 4rem 2rem 4rem;
  }

  @media screen and (max-width: 992px) {
    padding: 2rem 3rem 2rem 3rem;
  }

  @media screen and (max-width: 900px) {
    padding: 5rem 3rem 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem 2rem 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 5rem 1rem 2rem 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 5rem 0.5rem 2rem 0.5rem;
  }
`;

export const StyledResultsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  justify-items: center;

  @media screen and (max-width: 1530px) {
    width: 85%;
  }

  @media screen and (max-width: 1300px) {
    width: 92%;
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 945px) {
    width: 80%;
  }

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

const StyledLoadMoreBtn = styled.div`
  width: 16rem;
  min-width: 16rem;
  min-height: 13rem;
  background-color: var(--light-grey-bcg-clr);
  font-size: 2.2rem;
  margin: 1rem;
  border: 10px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--secondary-shadow);

  &:hover {
    box-shadow: var(--tertiary-shadow);
  }

  div {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.25);

    &:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 1);
      background-color: rgba(0, 0, 0, 0.2);
    }

    &:active p {
      transform: scale(0.95);
    }

    img {
      display: block;
      width: 70%;
    }
  }

  @media screen and (max-width: 1530px) {
    border: 8px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px) {
    border: 6px solid rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 700px) {
    width: 15rem;
    min-width: 15rem;
    min-height: 13rem;
  }

  @media screen and (max-width: 600px) {
    width: 19rem;
    min-width: 19rem;
    min-height: 16rem;
  }

  @media screen and (max-width: 430px) {
    width: 17rem;
    min-width: 17rem;
    min-height: 15rem;
  }
`;

export default QueryResults;
