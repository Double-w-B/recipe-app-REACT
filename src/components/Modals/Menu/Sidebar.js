import React from "react";
import StyledMenuModal from "./style";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";

const Sidebar = () => {
  const {
    clearQuery,
    handleModal,
    handleMenu,
    showAuthModal,
    userData,
    removeUserData,
  } = React.useContext(AppContext);

  const handleLinkClick = () => {
    clearQuery();
    handleModal();
    handleMenu();
  };

  const handleAuthClick = async () => {
    if (userData) {
      try {
        const url = "api/v1/auth/logout";
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        removeUserData();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    clearQuery();
    handleMenu();
    if (userData) {
      handleModal();
    }
    if (!userData) {
      showAuthModal();
    }
  };

  return (
    <StyledMenuModal.Sidebar>
      <p>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </p>
      <p>
        <Link to="/savedrecipes" onClick={handleLinkClick}>
          Saved Recipes
        </Link>
      </p>
      <p onClick={handleAuthClick}>
        <span>{userData ? "Log out" : "Log in"}</span>
      </p>
    </StyledMenuModal.Sidebar>
  );
};

export default Sidebar;
