import React from "react";
import StyledMenuModal from "./style";
import { MdOutlineClose } from "react-icons/md";
import { AppContext } from "../../../context/context";

const CloseButton = (props) => {
  const { handleModal, handleMenu } = React.useContext(AppContext);

  const handleClick = () => {
    handleModal();
    handleMenu();
    props.setIsSubmenu(false);
  };

  return (
    <StyledMenuModal.CloseButton>
      <MdOutlineClose onClick={handleClick} />
    </StyledMenuModal.CloseButton>
  );
};

export default CloseButton;
