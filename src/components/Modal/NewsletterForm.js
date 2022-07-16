import React, { useContext } from "react";
import styled, { keyframes, css } from "styled-components";
import { HiOutlineMail } from "../index";
import { AppContext } from "../../context/context";

const NewsletterForm = ({ setPassedEmail, passedEmail }) => {
  const { showHideModal, saveEmail } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passedEmail) {
      localStorage.setItem("newsletter", JSON.stringify(passedEmail));
      saveEmail(passedEmail);
      showHideModal();
    }
  };

  const handleChange = (e) => {
    const regExp =
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    regExp.test(String(e.target.value).toLowerCase())
      ? setPassedEmail(e.target.value)
      : setPassedEmail("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="myemail@mail.com"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "myemail@mail.com")}
        required
        onChange={handleChange}
      />
      <StyledButton type="submit" passedEmail={passedEmail}>
        <HiOutlineMail className="no-select" />
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 0 auto;
  width: 70%;
  min-width: 400px;
  height: 40px;
  background-color: #fff;
  display: flex;
  border: 2px solid var(--yellow-clr);

  input {
    height: 100%;
    width: 90%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
    color: var(--red-clr);

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      opacity: 0.3;
      /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(0, 0, 0, 0.3);
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(0, 0, 0, 0.3);
    }
  }

  @media screen and (max-width: 600px) {
    width: 60%;
    min-width: 350px;

    input {
      width: 85%;
    }
  }

  @media screen and (max-width: 550px) {
    min-width: 320px;
  }

  @media screen and (max-width: 400px) {
    min-width: 280px;
  }
`;

const StyledButton = styled.button`
  width: 10%;
  height: 100%;
  font-size: 2rem;
  display: grid;
  place-items: center;
  border: none;
  outline: none;
  background-color: transparent;

  svg {
    transform: translateY(-0.5px);
    color: var(--yellow-clr);
    cursor: pointer;
    animation: ${(props) => (props.passedEmail ? styles : "")};

    &:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 600px) {
    width: 15%;
  }
`;

const bounce = keyframes`
0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

const styles = css`
  ${bounce} 1.3s linear infinite;
`;

export default NewsletterForm;
