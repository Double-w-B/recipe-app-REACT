import React, { useContext } from "react";
import * as Component from "./index";
import { Loading, Error } from "../../index";
import StyledQueryResultsSection from "./style";
import Navigation from "../../shared/Navigation";
import { AppContext } from "../../../context/context";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { SharedContainer } from "../../../styles/shared/SharedContainer.style";

const QueryResults = () => {
  const { recipes, isLoading, isError } = useContext(AppContext);
  const { lastQuery, recipesData, nextPage } = useContext(AppContext);

  const recipesAmount = recipesData?.count
    ?.toString()
    .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Navigation query={lastQuery} amount={recipesAmount} page={"query"} />
      <StyledQueryResultsSection>
        <SharedContainer className="no-select">
          {recipes.map((item, index) => {
            return (
              <SingleRecipeResult key={index} item={item} type={"query"} />
            );
          })}
          {nextPage && <Component.LoadMoreButton />}
        </SharedContainer>
      </StyledQueryResultsSection>
    </main>
  );
};

export default QueryResults;
