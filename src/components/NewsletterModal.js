import React from "react";
import logo from "../images/logo.jpg";
import { HiOutlineMail, FaRegWindowClose } from "./index";
import { AppContext } from "../context/context";

const NewsletterModal = () => {
  const { isModal, showHideModal, saveEmail } = React.useContext(AppContext);

  const [passedEmail, setPassedEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passedEmail) {
      localStorage.setItem("newsletter", JSON.stringify(passedEmail));
      saveEmail(passedEmail);
      showHideModal();
    }
  };

  const handleChange = (e) => {
    const regExp =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    regExp.test(String(e.target.value).toLowerCase())
      ? setPassedEmail(e.target.value)
      : setPassedEmail("");
  };

  isModal
    ? document.body.classList.add("no-scrolling")
    : document.body.classList.remove("no-scrolling");

  return (
    <div className={isModal ? "modal show" : "modal"}>
      <div className="container">
        <div className="greeting no-select">
          <img src={logo} alt="logo" />
          <h2>Find a recipe for your mood</h2>
          {passedEmail ? (
            <>
              <h1> - AND - </h1>
              <h3>Thank you for signing up for our newsletter!</h3>
            </>
          ) : (
            <>
              <h1> - OR - </h1>
              <h3>
                Leave your email to receive recipes matched to your preferences.
              </h3>
            </>
          )}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="myemail@mail.com"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "myemail@mail.com")}
              required
              onChange={handleChange}
            />
            <button type="submit">
              <HiOutlineMail
                className={passedEmail ? "bounce no-select" : "no-select"}
              />
            </button>
          </form>
        </div>
        <div
          className={
            passedEmail ? "close-btn hide no-select" : "close-btn no-select"
          }
        >
          <FaRegWindowClose
            onClick={() => {
              saveEmail("user_denied");
              localStorage.setItem("newsletter", JSON.stringify("user_denied"));
              showHideModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
