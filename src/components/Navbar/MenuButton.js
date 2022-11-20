import React from "react";
import { HiMenu } from "react-icons/hi";
import { AppContext } from "../../context/context";
import StyledNavbar from "./style";

const MenuButton = () => {
  const { handleMenu, handleModal } = React.useContext(AppContext);

  const handleClick = () => {
    handleModal();
    handleMenu();
  };

  return (
    <StyledNavbar.MenuButton>
      <HiMenu onClick={handleClick} />
    </StyledNavbar.MenuButton>
  );
};

export default MenuButton;
