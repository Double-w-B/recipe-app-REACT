import styled from "styled-components";

export const Ingredient = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &:hover {
    p {
      opacity: 1;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }
    div {
      box-shadow: var(--primary-shadow);
      transform: scale(1.05);
    }
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    width: 100%;
    transition: all 0.3s linear;
    opacity: 0.65;
    cursor: ${(props) => (props.text.length > 30 ? "pointer" : "default")};
  }
`;

export const IngredientImage = styled.div`
  width: 60%;
  border-radius: 50%;
  border: 2px solid rgba(220, 220, 220, 1);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    min-width: 100px;
    min-height: 100px;
  }

  @media screen and (max-width: 768px) {
    min-width: 90px;
    min-height: 90px;
  }

  @media screen and (max-width: 600px) {
    min-width: 80px;
    min-height: 80px;
  }
`;
