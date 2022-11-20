import React, { useContext } from "react";
import StyledNewsletterModal from "./style";
import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../../../context/context";

const CloseButton = ({ passedEmail }) => {
  const { handleModal, hideNewsletter, saveEmail } = useContext(AppContext);

  const handleClick = () => {
    saveEmail("user_denied");
    sessionStorage.setItem("newsletter", JSON.stringify("user_denied"));
    handleModal();
    hideNewsletter();
  };

  return (
    <StyledNewsletterModal.CloseButton
      className={passedEmail ? "hide no-select" : "no-select"}
    >
      <MdOutlineClose onClick={handleClick} />
    </StyledNewsletterModal.CloseButton>
  );
};

export default CloseButton;
