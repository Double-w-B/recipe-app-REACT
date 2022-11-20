import React from "react";
import Modal from "../Modal";
import StyledNewsletterModal from "./style";
import * as Component from "./index";

const NewsletterModal = () => {
  const [passedEmail, setPassedEmail] = React.useState("");

  const emailInitialState = {
    passedEmail,
    setPassedEmail,
  };

  return (
    <Modal>
      <StyledNewsletterModal>
        <Component.CloseButton {...emailInitialState} />
        <StyledNewsletterModal.Content className="no-select">
          <Component.Content {...emailInitialState} />
          <Component.Form {...emailInitialState} />
        </StyledNewsletterModal.Content>
      </StyledNewsletterModal>
    </Modal>
  );
};

export default NewsletterModal;
