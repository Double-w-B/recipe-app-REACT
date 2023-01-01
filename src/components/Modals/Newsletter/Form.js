import React, { useContext } from "react";
import { TfiEmail } from "../../index";
import StyledNewsletterModal from "./style";
import { checkEmail } from "./utils/shared";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";

const Form = (props) => {
  const { newsletterEmail, setNewsletterEmail, setIsSubscribed } = props;

  const { saveEmail } = useContext(AppContext);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  //! API Requests - Start
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const url = "/api/v1/newsletter/add";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: newsletterEmail }),
    };

    if (!newsletterEmail) {
      return setErrorMsg("Please, provide email");
    }

    if (!checkEmail(newsletterEmail)) {
      return setErrorMsg("Please, provide valid email");
    }

    setIsLoading(true);

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!response.ok && data.msg === "Email already exists") {
        const timer = setTimeout(() => {
          setIsLoading(false);
          setErrorMsg(data.msg);
        }, 1000);
        return () => clearTimeout(timer);
      }

      if (!response.ok) return;

      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsSubscribed(true);
        setNewsletterEmail("");
        saveEmail(newsletterEmail);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Requests - End

  const handleInputChange = (e) => {
    setNewsletterEmail(e.target.value.toLowerCase());
    setIsSubscribed(false);
  };

  return (
    <StyledNewsletterModal.Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email@mail.com"
        value={newsletterEmail}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "email@mail.com")}
        onChange={handleInputChange}
      />
      <StyledNewsletterModal.Button
        type="submit"
        email={checkEmail(newsletterEmail)}
        isLoading={isLoading}
      >
        {!isLoading && <TfiEmail className="no-select" />}
        {isLoading && <img src={loadingSpinner} alt="" />}
      </StyledNewsletterModal.Button>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </StyledNewsletterModal.Form>
  );
};

export default Form;
