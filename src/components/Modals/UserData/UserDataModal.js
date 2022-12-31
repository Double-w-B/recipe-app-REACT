import React from "react";
import * as Component from "./index";
import StyledUserDataModal from "./style";
import { AppContext } from "../../../context/context";

const UserDataModal = () => {
  const { isUserData } = React.useContext(AppContext);

  const [isNameUpdate, setIsNameUpdate] = React.useState(true);
  const [isEmailUpdate, setIsEmailUpdate] = React.useState(false);
  const [isPasswordUpdate, setIsPasswordUpdate] = React.useState(false);

  const [newName, setNewName] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  const [errorMsg, setErrorMsg] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
      setSuccessMsg("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMsg, successMsg]);

  const userDataState = {
    show: isUserData,
    isNameUpdate,
    isEmailUpdate,
    isPasswordUpdate,
    newName,
    newEmail,
    password,
    newPassword,
    errorMsg,
    successMsg,
  };

  const stateActions = {
    setIsNameUpdate,
    setIsEmailUpdate,
    setIsPasswordUpdate,
    setNewName,
    setNewEmail,
    setPassword,
    setNewPassword,
    setErrorMsg,
    setSuccessMsg,
  };

  return (
    <StyledUserDataModal {...userDataState}>
      <div className="data__wrapper">
        <Component.Labels {...stateActions} {...userDataState} />
        <Component.Form {...stateActions} {...userDataState} />
        <Component.Buttons {...stateActions} {...userDataState} />
      </div>
    </StyledUserDataModal>
  );
};

export default UserDataModal;
