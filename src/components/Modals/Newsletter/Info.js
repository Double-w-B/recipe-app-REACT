import React, { Fragment } from "react";
import logo from "../../../images/logo2.png";
import { checkEmail } from "./utils/shared";

const Info = (props) => {
  return (
    <Fragment>
      <img src={logo} alt="logo" />
      <h1>Find a recipe for your mood</h1>

      <p>{checkEmail(props.newsletterEmail) ? "- AND -" : "- OR -"}</p>
      <p>
        {checkEmail(props.newsletterEmail)
          ? "Thank you for signing up for our newsletter!"
          : "Leave your email to get the latest recipes and cooking articles!"}
      </p>
    </Fragment>
  );
};

export default Info;
