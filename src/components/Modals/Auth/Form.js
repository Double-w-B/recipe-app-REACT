import React, { Fragment } from "react";
import StyledAuthModal from "./style";
import { BsFillEyeFill } from "react-icons/bs";

const Form = (props) => {
  const { isLogInGreeting, isRegisterSuccess } = props;
  const { isPasswordVisible, setIsPasswordVisible } = props;
  const { name, email, password, errorMsg } = props;
  const { userName, setName, setEmail, setPassword } = props;

  return (
    <StyledAuthModal.Form {...props}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          autoComplete="false"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          autoFocus={true}
          autoComplete="false"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          value={password}
          autoComplete="false"
          type={isPasswordVisible ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <BsFillEyeFill
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </label>

      {isLogInGreeting && (
        <Fragment>
          <p>
            Hello, <span>{userName}</span>
          </p>
          <p>Let's find recipes for your mood!</p>
        </Fragment>
      )}

      {isRegisterSuccess && (
        <Fragment>
          <p>
            New account was created <br />
            <span>successfully</span>
          </p>
          <p>Log in to record your mood recipes!</p>
        </Fragment>
      )}

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </StyledAuthModal.Form>
  );
};

export default Form;
