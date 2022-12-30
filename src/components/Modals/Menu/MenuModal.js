import React from "react";
import * as Component from "./index";
import StyledMenuModal from "./style";
import { AppContext } from "../../../context/context";

const MenuModal = () => {
  const { isMenu } = React.useContext(AppContext);
  const [isSubmenu, setIsSubmenu] = React.useState(false);

  const submenuState = {
    isSubmenu,
    setIsSubmenu,
  };

  const handleClick = () => {
    if (isSubmenu) setIsSubmenu(false);
  };

  return (
    <StyledMenuModal show={isMenu} className="no-select" onClick={handleClick}>
      <Component.CloseButton {...submenuState} />
      <Component.Sidebar {...submenuState} />
    </StyledMenuModal>
  );
};

export default MenuModal;
