import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Recipes, Footer } from "./components";
import { Filters, LocalExactRecipe, ExactRecipe } from "./components";
import { LocalRecipes, LocalStorageBtn, NewsletterModal } from "./components";
import { Error } from "./components";
import { AppContext } from "./context/context";

function App() {
  const { path, queryPath, localStrPath } = React.useContext(AppContext);

  return (
    <Router>
      <NewsletterModal />
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Filters />} />
        <Route exact path={`/recipes/${queryPath}`} element={<Recipes />} />
        <Route
          exact
          path={`/recipes/${queryPath}/${path}`}
          element={<ExactRecipe />}
        />
        <Route exact path="/savedrecipes" element={<LocalRecipes />} />
        <Route
          exact
          path={`/savedrecipes/${localStrPath}`}
          element={<LocalExactRecipe />}
        />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <LocalStorageBtn />
      <Footer />
    </Router>
  );
}

export default App;
