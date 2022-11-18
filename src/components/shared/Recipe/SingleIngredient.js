import React from "react";
import styled from "styled-components";
import noImg from "../../../images/no-img.jpg";

const SingleIngredient = (props) => {
  const [showText, setShowText] = React.useState(false);

  const checkAndShow = (e) => {
    e.currentTarget.lastChild.title.length > 30 && setShowText(!showText);
  };

  const { image, text } = props;
  return (
    <StyledIngredient onClick={checkAndShow} text={text}>
      <StyledImgContainer className="no-select">
        <img src={!image ? noImg : image} alt="" />
      </StyledImgContainer>

      <p title={text}>
        {text.length > 30
          ? showText
            ? text
            : `${text.substring(0, 30)}...`
          : text}
      </p>
    </StyledIngredient>
  );
};

const StyledIngredient = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const StyledImgContainer = styled.div`
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

export default SingleIngredient;
