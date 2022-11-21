import React from "react";
import { IoMdSearch } from "react-icons/io";
import LoadingAnimation from "../../shared/LoadingAnimation";
import { AppContext } from "../../../context/context";
import { StyledLoadMoreButton } from "./style/LoadMoreButton.style";

const LoadMoreButton = () => {
  const {
    setNextPageLoading,
    changeThePage,
    fetchRecipes,
    nextPageLoading,
    page,
  } = React.useContext(AppContext);

  const handleClick = () => {
    setNextPageLoading();
    changeThePage(page + 1);
    fetchRecipes();
  };
  return (
    <StyledLoadMoreButton>
      <div onClick={handleClick}>
        {nextPageLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            <p>Load</p>
            <p>
              more <IoMdSearch />
            </p>
          </>
        )}
      </div>
    </StyledLoadMoreButton>
  );
};

export default LoadMoreButton;
