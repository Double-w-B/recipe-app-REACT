import React from "react";
import StyledUserDataModal from "./style";
import { AppContext } from "../../../context/context";

const Buttons = (props) => {
  const { setIsNameUpdate, setIsEmailUpdate, setIsPasswordUpdate } = props;
  const { hideUserDataModal, handleModal } = React.useContext(AppContext);

  const handleCloseButton = () => {
    hideUserDataModal();
    handleModal();

    const timer = setTimeout(() => {
      setIsNameUpdate(true);
      setIsEmailUpdate(false);
      setIsPasswordUpdate(false);
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <StyledUserDataModal.Buttons>
      <button>Change</button>
      <button onClick={handleCloseButton}>Cancel</button>
    </StyledUserDataModal.Buttons>
  );
};

export default Buttons;
