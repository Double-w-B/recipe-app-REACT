import React from "react";
import StyledDeleteDataModal from "./style";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";

const Buttons = (props) => {
  const { password, setPassword, isLoading, setIsLoading, errorMsg } = props;
  const { setErrorMsg, isUserDeleted, setIsUserDeleted } = props;
  const { hideDeleteDataModal, handleModal, removeUserData } =
    React.useContext(AppContext);

  const navigate = useNavigate();

  //! API Requests - Start
  const handleDeleteButton = async () => {
    if (errorMsg) return;

    if (!password) {
      return setErrorMsg("Please provide password");
    }
    if (password && password.length < 6) {
      return setErrorMsg("Min. 6 characters for password");
    }

    setIsLoading(true);

    try {
      const url = "/api/v1/users/removeUser";
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password }),
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!response.ok && data.msg === "Invalid credentials") {
        const timer = setTimeout(() => {
          setIsLoading(false);
          setErrorMsg(data.msg);
        }, 500);
        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setIsLoading(false);
        navigate("/");
        setIsUserDeleted(true);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelButton = async () => {
    if (isUserDeleted) {
      try {
        const url = "/api/v1/auth/logout";
        await fetch(url, { method: "GET" });

        const timer = setTimeout(() => {
          removeUserData();
          setIsUserDeleted(false);
        }, 1000);

        handleModal();
        hideDeleteDataModal();
        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }

    handleModal();
    hideDeleteDataModal();
    setPassword("");
  };
  //! API Requests - End

  return (
    <StyledDeleteDataModal.Buttons {...props}>
      <button onClick={handleDeleteButton}>
        {!isLoading && "Delete"}
        {isLoading && <img src={loadingSpinner} alt="" />}
      </button>

      <button onClick={handleCancelButton}>
        {isUserDeleted ? "OK" : "Cancel"}
      </button>
    </StyledDeleteDataModal.Buttons>
  );
};

export default Buttons;
