import React from "react";
import StyledUserDataModal from "./style";
import { TfiEmail } from "react-icons/tfi";
import { AiFillLock } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";

const Labels = (props) => {
  const { setIsNameUpdate, setIsEmailUpdate, setIsPasswordUpdate } = props;
  const { setErrorMsg, setSuccessMsg } = props;

  const handleNameClick = () => {
    setIsNameUpdate(true);
    setIsEmailUpdate(false);
    setIsPasswordUpdate(false);
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handleEmailClick = () => {
    setIsNameUpdate(false);
    setIsEmailUpdate(true);
    setIsPasswordUpdate(false);
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handlePasswordClick = () => {
    setIsNameUpdate(false);
    setIsEmailUpdate(false);
    setIsPasswordUpdate(true);
    setErrorMsg("");
    setSuccessMsg("");
  };

  return (
    <StyledUserDataModal.Labels {...props}>
      <div className="name" onClick={handleNameClick}>
        <IoIosPerson /> Name
      </div>
      <div className="email" onClick={handleEmailClick}>
        <TfiEmail /> Email
      </div>
      <div className="password" onClick={handlePasswordClick}>
        <AiFillLock /> Password
      </div>
    </StyledUserDataModal.Labels>
  );
};

export default Labels;
