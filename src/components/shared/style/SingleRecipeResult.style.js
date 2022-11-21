import styled from "styled-components";

const StyledSingleRecipeContainer = styled.article`
  width: 16rem;
  height: 13rem;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  border: 6px solid var(--light-grey-bcg-clr);
  background-color: var(--light-grey-bcg-clr);
  box-shadow: var(--secondary-shadow);

  &:hover {
    box-shadow: var(--tertiary-shadow);
    transform: scale(1.1);

    div {
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.25);
    color: transparent;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0;
    color: var(--yellow-clr);
  }

  @media screen and (max-width: 900px) {
    &:hover {
      transform: none;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 15rem;
    height: 13rem;
  }

  @media screen and (max-width: 640px) {
    width: 21rem;
    height: 18rem;
  }

  @media screen and (max-width: 430px) {
    width: 17rem;
    height: 15rem;
  }
`;

export const SingleRecipe = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  transform: translateY(100%);
  transition: var(--transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  &:hover a svg {
    color: var(--yellow-clr);
  }

  a {
    color: #fff;

    svg {
      width: 1.7rem;
      height: 1.7rem;
      margin: 0.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    transform: translateY(0);

    a {
      color: var(--yellow-clr);
    }
  }
`;

StyledSingleRecipeContainer.SingleRecipe = SingleRecipe;

export default StyledSingleRecipeContainer;
