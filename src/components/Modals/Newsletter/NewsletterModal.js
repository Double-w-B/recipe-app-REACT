import React from "react";
import StyledNewsletterModal from "./style";
import * as Component from "./index";
import { AppContext } from "../../../context/context";

const NewsletterModal = () => {
  const [passedEmail, setPassedEmail] = React.useState("");
  const { isNewsletter } = React.useContext(AppContext);

  const emailInitialState = {
    passedEmail,
    setPassedEmail,
  };

  return (
    <StyledNewsletterModal show={isNewsletter}>
      <Component.CloseButton {...emailInitialState} />
      <StyledNewsletterModal.Content className="no-select">
        <Component.Content {...emailInitialState} />
        <Component.Form {...emailInitialState} />
      </StyledNewsletterModal.Content>
    </StyledNewsletterModal>
  );
};

export default NewsletterModal;
