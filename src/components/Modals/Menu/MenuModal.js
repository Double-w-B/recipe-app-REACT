import React from "react";
import Modal from "../Modal";
import * as Component from "./index";
import StyledMenuModal from "./style";
import { AppContext } from "../../../context/context";

const MenuModal = () => {
  const { isModal, isMenu } = React.useContext(AppContext);

  const show = isModal && isMenu;

  return (
    <Modal>
      <StyledMenuModal show={show} className="no-select">
        <Component.CloseButton />
        <Component.Sidebar />
      </StyledMenuModal>
    </Modal>
  );
};

export default MenuModal;
