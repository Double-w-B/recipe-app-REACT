import React from "react";
import * as Component from "./index";
import StyledMenuModal from "./style";
import { AppContext } from "../../../context/context";

const MenuModal = () => {
  const { isMenu } = React.useContext(AppContext);

  return (
    <StyledMenuModal show={isMenu} className="no-select">
      <Component.CloseButton />
      <Component.Sidebar />
    </StyledMenuModal>
  );
};

export default MenuModal;
