import React from "react";
import { VscSignIn } from "react-icons/vsc";
import { IoIosPersonAdd } from "react-icons/io";
import StyledAuthModal from "./style";

const Labels = (props) => {
  const { setAuthAction, setIsRegisterSuccess, setIsPasswordVisible } = props;
  const { setIsLogInGreeting, setName, setEmail, setPassword, setErrorMsg } =
    props;

  const handleLogInClick = () => {
    setAuthAction("Log in");
    setIsRegisterSuccess(false);
    setName("");
    setEmail("");
    setPassword("");
    setErrorMsg("");
    setIsPasswordVisible(false);
  };

  const handleRegisterClick = () => {
    setAuthAction("Register");
    setIsLogInGreeting(false);
    setEmail("");
    setPassword("");
    setErrorMsg("");
    setIsPasswordVisible(false);
  };

  return (
    <StyledAuthModal.Labels {...props}>
      <div className="log-in" onClick={handleLogInClick}>
        <VscSignIn /> Log in
      </div>
      <div className="register" onClick={handleRegisterClick}>
        <IoIosPersonAdd /> Register
      </div>
    </StyledAuthModal.Labels>
  );
};

export default Labels;
