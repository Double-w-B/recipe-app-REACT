import React from "react";
import logo from "../../images/logo2.png";

const Content = (props) => {
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>Find a recipe for your mood</h1>
      {props.passedEmail ? (
        <>
          <p> - AND - </p>
          <p>Thank you for signing up for our newsletter!</p>
        </>
      ) : (
        <>
          <p> - OR - </p>
          <p>
            Leave your email to get the latest recipes and cooking articles!
          </p>
        </>
      )}
    </>
  );
};

export default Content;
