import React from "react";
import Modal from "./Modal";
import StyledNewsletterModal from "./style/NewsletterModal.style";
import * as Component from "./index";

const NewsletterModal1 = () => {
  const [passedEmail, setPassedEmail] = React.useState("");

  const emailInitialState = {
    passedEmail,
    setPassedEmail,
  };

  return (
    <Modal>
      <StyledNewsletterModal>
        <StyledNewsletterModal.Content className="no-select">
          <Component.Content {...emailInitialState} />
          <Component.Form {...emailInitialState} />
        </StyledNewsletterModal.Content>
        <Component.CloseBtn {...emailInitialState} />
      </StyledNewsletterModal>
    </Modal>
  );
};

export default NewsletterModal1;
