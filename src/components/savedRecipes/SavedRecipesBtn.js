import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import star from "../../images/checked.png";

const SavedRecipesBtn = () => {
  const { rotate, isError, isLoading, currentPath, path, queryPath, email } =
    useContext(AppContext);
  const { clearQuery } = useContext(AppContext);

  const firstPath = "/";
  const secondPath = `/recipes/${queryPath}`;
  const thirdPath = `/recipes/${queryPath}/${path}`;

  const hideBtn = () => {
    if (
      !isError &&
      !isLoading &&
      email &&
      (currentPath === firstPath ||
        currentPath === secondPath ||
        currentPath === thirdPath)
    ) {
      return "show  no-select";
    } else {
      return "no-select";
    }
  };

  return (
    <Wrapper className={hideBtn()}>
      <Link to="/savedrecipes" onClick={() => clearQuery()}>
        <img src={star} alt="star" className={rotate ? "rotate" : ""} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 0.3rem;
  display: grid;
  place-items: center;
  position: fixed;
  right: 1.18rem;
  right: 1.5rem;
  bottom: 4rem;
  bottom: 1.18rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-out;
  opacity: 0;

  &.show {
    opacity: 1;
  }
  & a img {
    width: 100%;
    transform: translateY(-1px);
  }
  & a img:active {
    transform: scale(0.8);
  }
  & a img.rotate {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
  }

  @media screen and (max-width: 900px) {
    top: 0.5rem;
    left: 0.5rem;

    &.show {
      left: 0.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    position: absolute;
  }
`;

export default SavedRecipesBtn;
