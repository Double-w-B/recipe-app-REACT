import React, { useContext } from "react";
import * as Component from "./index";
import { Loading, Error } from "../../index";
import Navigation from "../../shared/Navigation";
import { AppContext } from "../../../context/context";
import SingleRecipeResult from "../../shared/SingleRecipeResult";
import { SharedSection } from "../../../styles/shared/SharedSection.style";
import { SharedContainer } from "../../../styles/shared/SharedContainer.style";

const QueryResults = () => {
  const { recipes, isLoading, isError } = useContext(AppContext);
  const { nextPage, changePath } = useContext(AppContext);
  const { lastQuery, recipesData } = useContext(AppContext);

  const recipesAmount = recipesData?.count
    ?.toString()
    .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");

  React.useEffect(() => {
    changePath("");
    const timer = setTimeout(() => {
      changePath(window.location.pathname);
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Navigation query={lastQuery} amount={recipesAmount} page={"query"} />
      <SharedSection>
        <SharedContainer className="no-select">
          {recipes.map((item, index) => {
            const id = item.recipe.uri.split("_")[1];
            return (
              <SingleRecipeResult key={id} item={item} id={id} type={"query"} />
            );
          })}
          {nextPage && <Component.LoadMoreButton />}
        </SharedContainer>
      </SharedSection>
    </main>
  );
};

export default QueryResults;
