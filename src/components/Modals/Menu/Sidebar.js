import React from "react";
import StyledMenuModal from "./style";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";

const Sidebar = () => {
  const { clearQuery, handleModal, handleMenu } = React.useContext(AppContext);

  const handleClick = () => {
    clearQuery();
    handleModal();
    handleMenu();
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
    </StyledMenuModal.Sidebar>
  );
};

export default Sidebar;
