import React, { Fragment } from "react";
import logo from "../../../images/logo2.png";

const Info = (props) => {
  const { isSubscribed } = props;
  return (
    <Fragment>
      <img src={logo} alt="logo" />
      <h1>Find a recipe for your mood</h1>

      <p>{isSubscribed ? "- AND -" : "- OR -"}</p>
      <p>
        {isSubscribed
          ? "Thank you for signing up for our newsletter!"
          : "Leave your email to get the latest recipes and cooking articles!"}
      </p>
    </Fragment>
  );
};

export default Info;
