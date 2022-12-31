import React, { Fragment } from "react";
import StyledUserDataModal from "./style";
import { AppContext } from "../../../context/context";
import { BsFillEyeFill } from "react-icons/bs";

const Form = (props) => {
  const { isNameUpdate, isEmailUpdate, isPasswordUpdate } = props;
  const { newName, newEmail, password, newPassword } = props;
  const { setNewName, setNewEmail, setPassword, setNewPassword } = props;
  const { errorMsg, successMsg } = props;

  const { userData } = React.useContext(AppContext);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  const userName =
    userData?.name?.substring(0, 1).toUpperCase() +
    userData?.name?.substring(1);
  const userEmail = userData?.email;

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = React.useState(false);

  React.useEffect(() => {
    setNewName("");
    setNewEmail("");
    setPassword("");
    setNewPassword("");
    setIsPasswordVisible("");
    setIsNewPasswordVisible("");
    // eslint-disable-next-line
  }, [isNameUpdate, isEmailUpdate, isPasswordUpdate]);

  return (
    <StyledUserDataModal.Form {...props}>
      {isNameUpdate && (
        <Fragment>
          <label>
            Current name:
            <input type="text" value={userName ? userName : ""} disabled />
          </label>
          <label>
            New name:
            <input
              type="text"
              value={newName}
              autoComplete="false"
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
        </Fragment>
      )}

      {isEmailUpdate && (
        <Fragment>
          <label>
            Current email:
            <input type="text" value={userEmail ? userEmail : ""} disabled />
          </label>
          <label>
            New email:
            <input
              type="text"
              value={newEmail}
              autoComplete="false"
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </label>
          <label>
            Confirm your password:
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <BsFillEyeFill
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </label>
        </Fragment>
      )}

      {isPasswordUpdate && (
        <Fragment>
          <label>
            Current password:
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              autoComplete="false"
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <BsFillEyeFill
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </label>
          <label>
            New password:
            <input
              type={isNewPasswordVisible ? "text" : "password"}
              value={newPassword}
              autoComplete="false"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {newPassword && (
              <BsFillEyeFill
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
              />
            )}
          </label>
        </Fragment>
      )}

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      {successMsg && <p className="successMsg">{successMsg}</p>}
    </StyledUserDataModal.Form>
  );
};

export default Form;
