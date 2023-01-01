import React from "react";
import * as Component from "./index";
import StyledDeleteDataModal from "./style";
import { AppContext } from "../../../context/context";

const DeleteData = () => {
  const { isDeleteData, isNewsletter } = React.useContext(AppContext);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUserDeleted, setIsUserDeleted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMsg]);

  React.useEffect(() => {
    if (!password) setIsPasswordVisible(false);
  }, [password]);

  React.useEffect(() => {
    if (isNewsletter) setPassword("");
  }, [isNewsletter]);

  const deleteDataState = {
    password,
    errorMsg,
    isPasswordVisible,
    isLoading,
    isUserDeleted,
  };

  const stateActions = {
    setPassword,
    setErrorMsg,
    setIsPasswordVisible,
    setIsLoading,
    setIsUserDeleted,
  };

  return (
    <StyledDeleteDataModal show={isDeleteData}>
      <div className="deleteData__wrapper">
        <Component.Question {...deleteDataState} />
        <Component.Form {...deleteDataState} {...stateActions} />
        <Component.Buttons {...stateActions} {...deleteDataState} />
      </div>
    </StyledDeleteDataModal>
  );
};

export default DeleteData;
