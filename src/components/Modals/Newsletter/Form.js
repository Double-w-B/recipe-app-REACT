import React, { useContext } from "react";
import { HiOutlineMail } from "../../index";
import StyledNewsletterModal from "./style";
import { AppContext } from "../../../context/context";

const Form = ({ setPassedEmail, passedEmail }) => {
  const { showHideModal, saveEmail } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passedEmail) {
      sessionStorage.setItem("newsletter", JSON.stringify(passedEmail));
      saveEmail(passedEmail);
      showHideModal();
    }
  };

  const handleChange = (e) => {
    const regExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    regExp.test(String(e.target.value).toLowerCase())
      ? setPassedEmail(e.target.value)
      : setPassedEmail("");
  };

  return (
    <StyledNewsletterModal.Form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email@mail.com"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "email@mail.com")}
        onChange={handleChange}
        required
      />
      <StyledNewsletterModal.Button type="submit" email={passedEmail}>
        <HiOutlineMail className="no-select" />
      </StyledNewsletterModal.Button>
    </StyledNewsletterModal.Form>
  );
};

export default Form;
