import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import star from "../../images/checked.png";

const LocalStorage = () => {
  const { rotate, isError, isLoading, currentPath, path, queryPath, email } =
    useContext(AppContext);

  const firstPath = "/";
  const secondPath = `/recipes/${queryPath}`;
  const thirdPath = `/recipes/${queryPath}/${path}`;

  return (
    <Wrapper
      className={
        !isError &&
        !isLoading &&
        email &&
        (currentPath === firstPath ||
          currentPath === secondPath ||
          currentPath === thirdPath)
          ? "show  no-select"
          : "no-select"
      }
    >
      <Link to="/savedrecipes">
        <img src={star} alt="star" className={rotate ? "rotate" : ""} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  position: fixed;
  right: 1.18rem;
  bottom: 4rem;
  bottom: 1.18rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-out;
  opacity: 0;
  &.show {
    opacity: 1;
  }
  & a img.rotate {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
  }

  @media screen and (max-width: 900px) {
    top: 1rem;
    left: -100%;

    &.show {
      left: 0;
    }
  }

  @media screen and (max-width: 600px) {
    position: absolute;
  }
`;

export default LocalStorage;
