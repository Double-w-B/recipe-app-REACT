import React from "react";
import StyledModalOverlay from "./style/ModalOverlay.style";

const ModalOverlay = (props) => {
  return (
    <StyledModalOverlay>
      <div>{props.children}</div>
    </StyledModalOverlay>
  );
};

export default ModalOverlay;
