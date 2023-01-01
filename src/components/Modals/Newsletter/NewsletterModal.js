import React from "react";
import * as Component from "./index";
import StyledNewsletterModal from "./style";
import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../../../context/context";

const NewsletterModal = () => {
  const { isNewsletter, saveEmail, handleModal, hideNewsletterModal, email } =
    React.useContext(AppContext);

  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const emailState = {
    newsletterEmail,
    setNewsletterEmail,
    isSubscribed,
    setIsSubscribed,
  };

  const handleCloseButton = () => {
    if (!email?.includes("@")) saveEmail("user_denied");
    hideNewsletterModal();
    handleModal();
  };

  return (
    <StyledNewsletterModal show={isNewsletter}>
      <StyledNewsletterModal.Content className="no-select" show={isNewsletter}>
        <Component.Info {...emailState} />
        <Component.Form {...emailState} />

        <StyledNewsletterModal.CloseButton className="no-select">
          <MdOutlineClose onClick={handleCloseButton} />
        </StyledNewsletterModal.CloseButton>
      </StyledNewsletterModal.Content>
    </StyledNewsletterModal>
  );
};

export default NewsletterModal;
