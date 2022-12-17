import React from "react";
import StyledAuthModal from "./style";
import { AppContext } from "../../../context/context";
import { VscSignIn } from "react-icons/vsc";
import { IoIosPersonAdd } from "react-icons/io";
import { BsFillEyeFill } from "react-icons/bs";

const Auth = () => {
  const { isAuth, hideAuthModal, handleModal } = React.useContext(AppContext);

  const [authAction, setAuthAction] = React.useState("Log in");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const isLogin = authAction === "Log in";

  const handleCancelButton = () => {
    handleModal();
    hideAuthModal();
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleAuth = () => {
    handleModal();
    hideAuthModal();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <StyledAuthModal show={isAuth} isLogin={isLogin}>
      <div className="authAction">
        <div className="log-in" onClick={() => setAuthAction("Log in")}>
          <VscSignIn /> Log in
        </div>
        <div className="register" onClick={() => setAuthAction("Register")}>
          <IoIosPersonAdd /> Register
        </div>
      </div>

      <form action="">
        <label htmlFor="">
          Name:
          <input
            type="text"
            autoComplete={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Email:
          <input
            type="email"
            autoComplete={false}
            value={email}
            autoFocus={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Password:
          <input
            type={isPasswordVisible ? "text" : "password"}
            autoComplete={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && (
            <BsFillEyeFill
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          )}
        </label>
      </form>

      <div className="buttons">
        <button onClick={handleAuth}>
          {authAction === "Log in" ? "Log in" : "Register"}
        </button>
        <button onClick={handleCancelButton}>Close</button>
      </div>
    </StyledAuthModal>
  );
};

export default Auth;
