import React from "react";
import StyledMenuModal from "./style";
import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../../../context/context";

const CloseButton = () => {
  const { handleModal, handleMenu } = React.useContext(AppContext);

  const handleClick = () => {
    handleModal();
    handleMenu();
  };
  return (
    <StyledMenuModal.CloseButton>
      <MdOutlineClose onClick={handleClick} />
    </StyledMenuModal.CloseButton>
  );
};

export default CloseButton;
