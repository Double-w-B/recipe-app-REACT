import React, { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { AppContext } from "../../context/context";
import StyledNewsletterModal from "./style/NewsletterModal.style";

const CloseBtn = ({ passedEmail }) => {
  const { handleModal, saveEmail } = useContext(AppContext);

  const handleClick = () => {
    saveEmail("user_denied");
    sessionStorage.setItem("newsletter", JSON.stringify("user_denied"));
    handleModal();
  };

  return (
    <StyledNewsletterModal.CloseBtn
      className={passedEmail ? "hide no-select" : "no-select"}
    >
      <FaRegWindowClose onClick={handleClick} />
    </StyledNewsletterModal.CloseBtn>
  );
};

export default CloseBtn;
