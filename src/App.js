import React from "react";
import * as Component from "./components";
import * as Modal from "./components/Modals";
import { AppContext } from "./context/context";
import ModalOverlay from "./components/Modals/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isModal, handleModal, showNewsletterModal } =
    React.useContext(AppContext);
  const { userData, saveEmail, email, saveUserData } =
    React.useContext(AppContext);

  React.useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!email && userData?.email) {
      checkNewsletterDB();
    }
    // eslint-disable-next-line
  }, [userData]);

  React.useEffect(() => {
    if (!email && !isModal) {
      const timer = setTimeout(() => {
        handleModal();
        showNewsletterModal();
      }, 10000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [email, isModal]);

  //! API Requests - Start
  const checkUser = async () => {
    try {
      const url = "/api/v1/users/checkUser";
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      saveUserData(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const checkNewsletterDB = async () => {
    try {
      const url = "/api/v1/newsletter/checkEmail";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: userData.email }),
      };

      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (!response.ok) return;
      saveEmail(data.email);
    } catch (error) {
      console.log(error);
    }
  };
  //! API Requests - End

  return (
    <Router>
      <ModalOverlay>
        <Modal.Auth />
        <Modal.Menu />
        <Modal.UserData />
        <Modal.Newsletter />
        <Modal.DeleteData />
      </ModalOverlay>

      <Component.Navbar />
      <Routes>
        <Route exact path="/" element={<Component.Home />} />
        <Route
          exact
          path={"/recipes/:query"}
          element={<Component.QueryResults />}
        />
        <Route
          exact
          path={"/recipes/:query/:id"}
          element={<Component.Recipe />}
        />
        <Route
          exact
          path="/savedrecipes"
          element={<Component.SavedRecipesResults />}
        />
        <Route
          exact
          path={`/savedrecipes/:id`}
          element={<Component.Recipe />}
        />
        <Route exact path="*" element={<Component.Error />} />
      </Routes>
      <Component.ScrollButton />
      <Component.Footer />
    </Router>
  );
}

export default App;
