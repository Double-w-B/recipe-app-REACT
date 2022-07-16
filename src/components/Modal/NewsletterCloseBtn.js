import React, { useContext } from "react";
import styled from "styled-components";
import { FaRegWindowClose } from "../index";
import { AppContext } from "../../context/context";

const NewsletterCloseBtn = ({ passedEmail }) => {
  const { showHideModal, saveEmail } = useContext(AppContext);

  return (
    <StyledContainer className={passedEmail ? "hide no-select" : "no-select"}>
      <FaRegWindowClose
        onClick={() => {
          saveEmail("user_denied");
          localStorage.setItem("newsletter", JSON.stringify("user_denied"));
          showHideModal();
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  background-color: var(--light-grey-bcg-clr);
  opacity: 1;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }

  svg {
    font-size: 1.5rem;
    color: var(--yellow-clr);
    transform: translateX(-1px);
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }
  }
`;

export default NewsletterCloseBtn;
