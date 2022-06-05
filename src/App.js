import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as componentsModule from "./components";
import { AppContext } from "./context/context";

function App() {
  const { path, queryPath, localStrPath } = React.useContext(AppContext);

  return (
    <Router>
      <componentsModule.NewsletterModal />
      <componentsModule.Navbar />
      <Routes>
        <Route exact path="/" element={<componentsModule.Home />} />
        <Route
          exact
          path={`/recipes/${queryPath}`}
          element={<componentsModule.SearchResults />}
        />
        <Route
          exact
          path={`/recipes/${queryPath}/${path}`}
          element={<componentsModule.SelectedRecipe />}
        />
        <Route
          exact
          path="/savedrecipes"
          element={<componentsModule.SavedRecipesResults />}
        />
        <Route
          exact
          path={`/savedrecipes/${localStrPath}`}
          element={<componentsModule.SavedSelectedRecipe />}
        />
        <Route exact path="*" element={<componentsModule.Error />} />
      </Routes>
      <componentsModule.SavedRecipesBtn />
      <componentsModule.Footer />
    </Router>
  );
}

export default App;
