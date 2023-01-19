import React from "react";
import StyledMenuModal from "./style";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/context";
import loadingSpinner from "../../../images/loading.gif";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [isLogoutLoading, setIsLogoutLoading] = React.useState(false);
  const [isUnsubscribeLoading, setIsUnsubscribeLoading] = React.useState(false);
  const {
    clearQuery,
    handleModal,
    handleMenu,
    showAuthModal,
    userData,
    removeUserData,
    showNewsletterModal,
    showUserDataModal,
    showDeleteDataModal,
    email,
    saveEmail,
  } = React.useContext(AppContext);

  const userName =
    userData?.name?.substring(0, 1).toUpperCase() +
    userData?.name?.substring(1);

  //! API Requests - Start
  const handleAuthClick = async () => {
    if (userData) {
      setIsLogoutLoading(true);
      try {
        const url = "/api/v1/auth/logout";
        await fetch(url, { method: "GET" });

        const timer = setTimeout(() => {
          removeUserData();
          clearQuery();
          setIsLogoutLoading(false);
          handleMenu();
          handleModal();
          saveEmail("");
          props.setIsSubmenu(false);
          navigate("/");
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.log(error);
      }
    }

    clearQuery();
    handleMenu();
    showAuthModal();
    props.setIsSubmenu(false);
  };

  const handleUnsubscribe = async () => {
    setIsUnsubscribeLoading(true);
    try {
      const url = "/api/v1/newsletter/remove";
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      };

      await fetch(url, requestOptions);

      const timer = setTimeout(() => {
        setIsUnsubscribeLoading(false);
        saveEmail("user_denied");
      }, 500);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Requests - End

  const handleLinkClick = () => {
    clearQuery();
    handleModal();
    handleMenu();
    props.setIsSubmenu(false);
  };

  const handleNewsletterClick = () => {
    handleMenu();
    showNewsletterModal();
    props.setIsSubmenu(false);
  };

  const handleChangeUserData = () => {
    handleMenu();
    showUserDataModal();
  };

  const handleDeleteDataClick = () => {
    handleMenu();
    showDeleteDataModal();
  };

  return (
    <StyledMenuModal.Sidebar isSubmenu={props.isSubmenu} userData={userData}>
      <p>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </p>
      <p>
        <span onClick={handleNewsletterClick}>Newsletter</span>
      </p>
      <p>
        <Link to="/savedrecipes" onClick={handleLinkClick}>
          Saved Recipes
        </Link>
      </p>

      {!userData && (
        <p>
          <span onClick={handleAuthClick}>Log in</span>
        </p>
      )}

      {userData && (
        <div className="submenu">
          <p>
            <span onClick={() => props.setIsSubmenu(!props.isSubmenu)}>
              Account
            </span>
            <MdArrowDropDown />
          </p>
          <ul>
            <li>
              <span onClick={handleChangeUserData}>Change my data</span> •
            </li>
            {email?.includes("@") && (
              <li>
                <span onClick={handleUnsubscribe}>
                  {isUnsubscribeLoading && <img src={loadingSpinner} alt="" />}
                  Unsubscribe me
                </span>{" "}
                •
              </li>
            )}
            <li>
              <span onClick={handleDeleteDataClick}>Delete account</span> •
            </li>
            <li>
              <span onClick={handleAuthClick}>
                {isLogoutLoading && <img src={loadingSpinner} alt="" />}
                Log out
              </span>{" "}
              •
            </li>
          </ul>
        </div>
      )}

      {userData && (
        <p className="greeting">
          Hey, {userName}! <br /> What's your mood today?
        </p>
      )}
    </StyledMenuModal.Sidebar>
  );
};

export default Sidebar;
