import React from "react";
import StyledMenuModal from "./style";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";

const Sidebar = () => {
  const navigate = useNavigate();
  const {
    clearQuery,
    handleModal,
    handleMenu,
    showAuthModal,
    userData,
    removeUserData,
  } = React.useContext(AppContext);

  //! API Requests - Start
  const handleAuthClick = async () => {
    if (userData) {
      try {
        const url = "/api/v1/auth/logout";
        await fetch(url, { method: "GET" });
        removeUserData();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    clearQuery();
    handleMenu();

    if (userData) handleModal();
    if (!userData) showAuthModal();
  };
  //! API Requests - End

  const handleLinkClick = () => {
    clearQuery();
    handleModal();
    handleMenu();
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
