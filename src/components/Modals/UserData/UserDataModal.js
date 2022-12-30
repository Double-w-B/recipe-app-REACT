import React from "react";
import * as Component from "./index";
import StyledUserDataModal from "./style";
import { AppContext } from "../../../context/context";

const UserDataModal = () => {
  const { isUserData } = React.useContext(AppContext);

  const [isNameUpdate, setIsNameUpdate] = React.useState(true);
  const [isEmailUpdate, setIsEmailUpdate] = React.useState(false);
  const [isPasswordUpdate, setIsPasswordUpdate] = React.useState(false);

  const userDataState = {
    show: isUserData,
    isNameUpdate,
    isEmailUpdate,
    isPasswordUpdate,
  };

  const stateActions = {
    setIsNameUpdate,
    setIsEmailUpdate,
    setIsPasswordUpdate,
  };

  return (
    <StyledUserDataModal {...userDataState}>
      <div className="data__wrapper">
        <Component.Labels {...stateActions} {...userDataState} />
        <Component.Form {...userDataState} />
        <Component.Buttons {...stateActions} />
      </div>
    </StyledUserDataModal>
  );
};

export default UserDataModal;
