import React from "react";
import StyledMenuModal from "./style";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";

const Sidebar = () => {
  const { clearQuery, handleModal, handleMenu, showAuthModal } =
    React.useContext(AppContext);

  const handleClick = () => {
    clearQuery();
    handleModal();
    handleMenu();
  };

  const handleAuthClick = async () => {
    clearQuery();
    handleMenu();
    showAuthModal();
  };

  return (
    <StyledMenuModal.Sidebar>
      <p>
        <Link to="/" onClick={handleClick}>
          Home
        </Link>
      </p>
      <p>
        <Link to="/savedrecipes" onClick={handleClick}>
          Saved Recipes
        </Link>
      </p>
      <p onClick={handleAuthClick}>
        <span>Log in</span>
      </p>
    </StyledMenuModal.Sidebar>
  );
};

export default Sidebar;
