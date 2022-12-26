import React, { Fragment } from "react";
import StyledAuthModal from "./style";
import { VscSignIn } from "react-icons/vsc";
import { BsFillEyeFill } from "react-icons/bs";
import { IoIosPersonAdd } from "react-icons/io";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";
import { handleErrorMessage } from "./utils/helpers";

const Auth = () => {
  const { isAuth, hideAuthModal, handleModal, saveUserData, userData } =
    React.useContext(AppContext);

  const [authAction, setAuthAction] = React.useState("Log in");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLogInGreeting, setIsLogInGreeting] = React.useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = React.useState(false);

  const isLogIn = authAction === "Log in";
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

  //! API Requests - Start

  const handleAuth = async () => {
    const userData = {
      name,
      email,
      password,
    };

    setIsLoading(true);

    if (authAction === "Register") {
      try {
        const url = "/api/v1/auth/register";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok && data.msg === "Email already exists") {
          setIsLoading(false);
          setErrorMsg(data.msg);
          return;
        }

        if (!response.ok) {
          setIsLoading(false);
          handleErrorMessage(userData, "register", setErrorMsg);
          return;
        }

        const timer = setTimeout(() => {
          setIsLoading(false);
          setIsRegisterSuccess(true);
        }, 1000);
        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }

    if (authAction === "Log in") {
      try {
        const url = "/api/v1/auth/login";
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok && password && data.msg === "Invalid credentials") {
          setIsLoading(false);
          setErrorMsg(data.msg);
          return;
        }

        if (!response.ok) {
          setIsLoading(false);
          handleErrorMessage(userData, "log in", setErrorMsg);
          return;
        }

        const timer = setTimeout(() => {
          setIsLoading(false);
          setIsLogInGreeting(true);
          saveUserData(data.user);
        }, 1000);
        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //! API Requests - End

  const closeModal = () => {
    handleModal();
    hideAuthModal();

    const timer = setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
      setAuthAction("Log in");
      setIsRegisterSuccess(false);
      setIsLogInGreeting(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

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
    <StyledAuthModal {...authState}>
      <div className="auth__wrapper">
        <div className="auth__action no-select">
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
              onChange={(e) => setPassword(e.target.value.trim())}
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
        </form>

        <div className="buttons">
          <button onClick={handleAuth}>
            {!isLoading && (authAction === "Log in" ? "Log in" : "Register")}
            {isLoading && <img src={loadingSpinner} alt="" />}
          </button>
          <button onClick={closeModal}>
            {isLogInGreeting ? "Ok" : "Close"}
          </button>
        </div>
      </div>
    </StyledAuthModal>
  );
};

export default Auth;
