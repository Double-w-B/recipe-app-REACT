import React from "react";
import StyledAuthModal from "./style";
import loadingSpinner from "../../../images/loading.gif";

const Buttons = (props) => {
  const { handleAuth, handleCloseButton } = props;
  const { isLoading, authAction, isLogInGreeting } = props;

  return (
    <StyledAuthModal.Buttons {...props}>
      <button onClick={handleAuth}>
        {!isLoading && (authAction === "Log in" ? "Log in" : "Register")}
        {isLoading && <img src={loadingSpinner} alt="" />}
      </button>
      <button onClick={handleCloseButton}>
        {isLogInGreeting ? "Ok" : "Close"}
      </button>
    </StyledAuthModal.Buttons>
  );
};

export default Buttons;
