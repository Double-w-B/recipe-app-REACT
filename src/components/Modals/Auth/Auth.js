import React, { Fragment } from "react";
import StyledAuthModal from "./style";
import { VscSignIn } from "react-icons/vsc";
import { IoIosPersonAdd } from "react-icons/io";
import { BsFillEyeFill } from "react-icons/bs";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";

const Auth = () => {
  const { isAuth, hideAuthModal, handleModal, saveUserData, userData } =
    React.useContext(AppContext);

  const [authAction, setAuthAction] = React.useState("Log in");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const isLogIn = authAction === "Log in";
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLogInGreeting, setIsLogInGreeting] = React.useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);
  const userName =
    userData?.name?.substring(0, 1).toUpperCase() +
    userData?.name?.substring(1);

  const authState = {
    show: isAuth,
    isLogIn,
    isLoading,
    isLogInGreeting,
    isRegisterSuccess,
    userName,
  };

  React.useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => {
        setErrorMsg("");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  const closeModal = () => {
    handleModal();
    hideAuthModal();
    setName("");
    setEmail("");
    setPassword("");
    setAuthAction("Log in");
    setIsRegisterSuccess(false);
    setIsLogInGreeting(false);
  };

  const handleAuth = async () => {
    const user = {
      name,
      email,
      password,
    };

    setIsLoading(true);

    if (authAction === "Register") {
      try {
        const url = "api/v1/auth/register";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setErrorMsg(data.msg);
          return;
        }

        setIsLoading(false);
        setIsRegisterSuccess(true);
      } catch (error) {
        console.log(error);
      }
    }

    if (authAction === "Log in") {
      try {
        const url = "api/v1/auth/login";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setErrorMsg(data.msg);
          return;
        }

        setIsLoading(false);
        setIsLogInGreeting(true);
        saveUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogInClick = () => {
    setAuthAction("Log in");
    setIsRegisterSuccess(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleRegisterClick = () => {
    setAuthAction("Register");
    setIsLogInGreeting(false);
    setEmail("");
    setPassword("");
  };

  return (
    <StyledAuthModal {...authState}>
      <div className="authAction no-select">
        <div className="log-in" onClick={handleLogInClick}>
          <VscSignIn /> Log in
        </div>
        <div className="register" onClick={handleRegisterClick}>
          <IoIosPersonAdd /> Register
        </div>
      </div>

      <form>
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
              Hello, <span>{userName}</span>!
            </p>
            <p>Let's find recipes for your mood!</p>
          </Fragment>
        )}
        {isRegisterSuccess && (
          <Fragment>
            <p>
              New account was created <span>successfully</span>!
            </p>
            <p>Log in to record your mood recipes!</p>
          </Fragment>
        )}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      </form>

      <div className="buttons">
        <button onClick={handleAuth}>
          {!isLoading && (authAction === "Log in" ? "Log in" : "Register")}
          {isLoading && <img src={loadingSpinner} alt="" />}
        </button>
        <button onClick={closeModal}>Close</button>
      </div>
    </StyledAuthModal>
  );
};

export default Auth;
