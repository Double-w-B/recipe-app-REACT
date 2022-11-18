import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Component from "./components";
import NewsletterModal from "./components/Modal/NewsletterModal";
import { Navbar } from "./components/Navbar";
import { AppContext } from "./context/context";
import Recipe from "./components/shared/Recipe/Recipe";

function App() {
  const { path, queryPath, localStrPath } = React.useContext(AppContext);
  const { isModal } = React.useContext(AppContext);

  isModal
    ? document.body.classList.add("no-scrolling")
    : document.body.classList.remove("no-scrolling");

  return (
    <Router>
      {/* Modal */}
      {isModal && <NewsletterModal />}
      <Navbar />
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
          element={<Recipe />}
        />
        <Route
          exact
          path="/savedrecipes"
          element={<Component.SavedRecipesResults />}
        />
        <Route
          exact
          path={`/savedrecipes/${localStrPath}`}
          element={<Recipe />}
        />
        <Route exact path="*" element={<Component.Error />} />
      </Routes>
      <Component.SavedRecipesBtn />
      <Component.Footer />
    </Router>
  );
}

export default App;
