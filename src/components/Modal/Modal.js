import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay {...props}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
