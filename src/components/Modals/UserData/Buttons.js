import React from "react";
import StyledUserDataModal from "./style";
import { AppContext } from "../../../context/context";
import { handleErrorMessage, checkEmail } from "./utils/helpers";
import loadingSpinner from "../../../images/loading.gif";

const Buttons = (props) => {
  const { setIsNameUpdate, setIsEmailUpdate, setIsPasswordUpdate } = props;
  const { isNameUpdate, isEmailUpdate, isPasswordUpdate } = props;
  const { newName, newEmail, password, newPassword } = props;
  const { setNewName, setNewEmail, setPassword, setNewPassword } = props;
  const { setErrorMsg, setSuccessMsg } = props;
  const { hideUserDataModal, handleModal, userData, saveUserData } =
    React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  //! API Requests - Start
  const handleChangeButton = async () => {
    /* NAME UPDATE */

    if (isNameUpdate) {
      if (!newName) {
        return setErrorMsg("Please, provide new name");
      }
      if (newName.toLowerCase() === userData.name) {
        return setErrorMsg("The new name is equal to the current");
      }

      setIsLoading(true);
      try {
        const url = "/api/v1/users/updateUserName";
        const requestOptions = {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name: newName.toLowerCase() }),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok) {
          const timer = setTimeout(() => {
            setIsLoading(false);
            handleErrorMessage("name", newName, setErrorMsg);
          }, 500);

          return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
          setIsLoading(false);
          saveUserData(data.user);
          setNewName("");
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }

    /* EMAIL UPDATE */

    if (isEmailUpdate) {
      if (!newEmail) {
        return setErrorMsg("Please, provide new email");
      }
      if (newEmail === userData.email) {
        return setErrorMsg("The new email is equal to the current");
      }
      if (!checkEmail(newEmail)) {
        return setErrorMsg("Please, provide valid email");
      }
      if (!password) {
        return setErrorMsg("Please, confirm your password");
      }
      if (password && password.length < 6) {
        return setErrorMsg("Min. 6 characters for password");
      }

      setIsLoading(true);
      try {
        const url = "/api/v1/users/updateUserEmail";
        const requestOptions = {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email: newEmail, password }),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok && data.msg === "Email already exists") {
          const timer = setTimeout(() => {
            setIsLoading(false);
            setErrorMsg(data.msg);
          }, 500);

          return () => clearTimeout(timer);
        }

        if (!response.ok && data.msg === "Invalid credentials") {
          const timer = setTimeout(() => {
            setIsLoading(false);
            setErrorMsg(data.msg);
          }, 500);

          return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
          setIsLoading(false);
          saveUserData(data.user);
          setNewEmail("");
          setPassword("");
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }

    /* PASSWORD UPDATE */

    if (isPasswordUpdate) {
      if (!password || !newPassword) {
        return setErrorMsg("Please, provide both values");
      }
      if (password.length < 6 || newPassword.length < 6) {
        return setErrorMsg("Min. 6 characters for password");
      }

      setIsLoading(true);
      try {
        const url = "/api/v1/users/updateUserPassword";
        const requestOptions = {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ oldPassword: password, newPassword }),
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
          setPassword("");
          setNewPassword("");
          setSuccessMsg("Password updated successfully");
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //! API Requests - End

  const handleCloseButton = () => {
    hideUserDataModal();
    handleModal();

    const timer = setTimeout(() => {
      setIsNameUpdate(true);
      setIsEmailUpdate(false);
      setIsPasswordUpdate(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <StyledUserDataModal.Buttons isLoading={isLoading} {...props}>
      <button onClick={handleChangeButton}>
        {!isLoading && "Change"}
        {isLoading && <img src={loadingSpinner} alt="" />}
      </button>
      <button onClick={handleCloseButton}>Cancel</button>
    </StyledUserDataModal.Buttons>
  );
};

export default Buttons;
