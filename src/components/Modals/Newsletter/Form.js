import React, { useContext } from "react";
import { HiOutlineMail } from "../../index";
import StyledNewsletterModal from "./style";
import { checkEmail } from "./utils/shared";
import { AppContext } from "../../../context/context";

const Form = ({ newsletterEmail, setNewsletterEmail }) => {
  const { handleModal, hideNewsletterModal, saveEmail } =
    useContext(AppContext);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "api/v1/newsletter/add";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: newsletterEmail }),
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.msg);
        return;
      }
      saveEmail(newsletterEmail);
      hideNewsletterModal();
      handleModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledNewsletterModal.Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email@mail.com"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "email@mail.com")}
        onChange={(e) => setNewsletterEmail(e.target.value.toLowerCase())}
      />
      <StyledNewsletterModal.Button
        type="submit"
        email={checkEmail(newsletterEmail)}
      >
        <HiOutlineMail className="no-select" />
      </StyledNewsletterModal.Button>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </StyledNewsletterModal.Form>
  );
};

export default Form;
