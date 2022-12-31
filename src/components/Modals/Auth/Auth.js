import React from "react";
import * as Component from "./index";
import StyledAuthModal from "./style";
import { handleErrorMessage } from "./utils/helpers";
import { AppContext } from "../../../context/context";

const Auth = () => {
  const { isAuth, hideAuthModal, handleModal, saveUserData, userData } =
    React.useContext(AppContext);

  const [authAction, setAuthAction] = React.useState("Log in");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    name,
    email,
    password,
    errorMsg,
    authAction,
  };

  const stateActions = {
    setAuthAction,
    setName,
    setEmail,
    setPassword,
    setErrorMsg,
    setIsLoading,
    setIsLogInGreeting,
    setIsRegisterSuccess,
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
      name: name.toLowerCase(),
      email: email.trim(),
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
          const timer = setTimeout(() => {
            setIsLoading(false);
            setErrorMsg(data.msg);
          }, 500);

          return () => clearTimeout(timer);
        }

        if (!response.ok) {
          const timer = setTimeout(() => {
            setIsLoading(false);
            handleErrorMessage(userData, "register", setErrorMsg);
          }, 500);

          return () => clearTimeout(timer);
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
          const timer = setTimeout(() => {
            setIsLoading(false);
            setErrorMsg(data.msg);
          }, 500);

          return () => clearTimeout(timer);
        }

        if (!response.ok) {
          const timer = setTimeout(() => {
            setIsLoading(false);
            handleErrorMessage(userData, "log in", setErrorMsg);
          }, 500);

          return () => clearTimeout(timer);
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

  const handleCloseButton = () => {
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

  const handlersFn = {
    handleAuth,
    handleCloseButton,
  };

  return (
    <StyledAuthModal {...authState}>
      <div className="auth__wrapper">
        <Component.Labels {...authState} {...stateActions} />
        <Component.Form {...authState} {...stateActions} />
        <Component.Buttons {...stateActions} {...handlersFn} {...authState} />
      </div>
    </StyledAuthModal>
  );
};

export default Auth;
