import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Recipes, Footer, Filters, Error } from "./components";
import { LocalExactRecipe, ExactRecipe, LocalRecipes } from "./components";
import { GreetingModal } from "./components";
import { AppContext } from "./context/context";
import { LocalStorage } from "./components";

function App() {
  const { path, queryPath, localStrPath } = React.useContext(AppContext);

  return (
    <Router>
      <GreetingModal />
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
      <LocalStorage />
      <Footer />
    </Router>
  );
}

export default App;
