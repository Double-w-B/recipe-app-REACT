import React from "react";
import StyledModalOverlay from "./style/ModalOverlay.style";
import { AppContext } from "../../context/context";

const ModalOverlay = (props) => {
  const { isModal } = React.useContext(AppContext);

  return (
    <StyledModalOverlay show={isModal}>{props.children}</StyledModalOverlay>
  );
};

export default ModalOverlay;
