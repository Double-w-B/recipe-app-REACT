import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Component from "./components";
import * as Modal from "./components/Modals";
import { AppContext } from "./context/context";
import ModalOverlay from "./components/Modals/Modal";

function App() {
  const { path, queryPath, localStrPath } = React.useContext(AppContext);

  return (
    <Router>
      <ModalOverlay>
        <Modal.Newsletter />
        <Modal.Menu />
        <Modal.Auth />
      </ModalOverlay>

      <Component.Navbar />
      <Routes>
        <Route exact path="/" element={<Component.Home />} />
        <Route
          exact
          path={`/recipes/${queryPath}`}
          element={<Component.QueryResults />}
        />
        <Route
          exact
          path={`/recipes/${queryPath}/${path}`}
          element={<Component.Recipe />}
        />
        <Route
          exact
          path="/savedrecipes"
          element={<Component.SavedRecipesResults />}
        />
        <Route
          exact
          path={`/savedrecipes/${localStrPath}`}
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
