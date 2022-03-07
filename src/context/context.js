import React, { useState, useEffect } from "react";

const mainUrl = "https://api.edamam.com/api/recipes/v2?type=public";

const clientID = `${process.env.REACT_APP_ID_KEY}`;
const accessKey = `${process.env.REACT_APP_ACCESS_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState(
    JSON.parse(localStorage.getItem("lastQuery")) || ""
  );
  const [rotate, setRotate] = useState(false);

  /* Pages */
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || 1
  );
  const [nextPage, setNextPage] = useState(
    JSON.parse(localStorage.getItem("nextPage")) || ""
  );

  /* Paths */
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [path, setPath] = useState(
    JSON.parse(localStorage.getItem("path")) || "path"
  );
  const [queryPath, setQueryPath] = useState(
    JSON.parse(localStorage.getItem("queryPath")) || "queryPath"
  );

  const [localStrPath, setLocalStrPath] = useState("myrecipes");

  /* Recipes */
  const [recipesData, setRecipesData] = useState(
    JSON.parse(localStorage.getItem("recipes-data")) || ""
  );
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes")) || ""
  );
  const [localStrRecipes, setLocalStrRecipes] = useState(
    JSON.parse(localStorage.getItem("saved-recipes") || "[]")
  );

  /* Preferences */
  const [diet, setDiet] = useState("");
  const [health, setHealth] = useState("");
  const [meal, setMeal] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [calories, setCalories] = useState("");
  const [minInput, setMinInput] = useState("0");
  const [maxInput, setMaxInput] = useState("1000");

  /* Modal & email */
  const [isModal, setIsModal] = useState(false);
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("newsletter")) || ""
  );

  const changePreferences = (type, change) => {
    type === "diet" && setDiet(change);
    type === "health" && setHealth(change);
    type === "meal" && setMeal(change);
    type === "cuisine" && setCuisine(change);
    type === "dish" && setDish(change);
    type === "calories" && setCalories(change);
    type === "minInput" && setMinInput(change);
    type === "maxInput" && setMaxInput(change);
  };

  
  useEffect(() => {
    !email && setIsModal(true);
  }, [email]);

  useEffect(() => {
    query && setPage(1);
  }, [query]);

  useEffect(() => {
    (minInput > 0 || maxInput < 1000) &&
      setCalories(`${minInput}-${maxInput}`);
  }, [minInput, maxInput]);

  useEffect(() => {
    localStorage.setItem("saved-recipes", JSON.stringify(localStrRecipes));
  }, [localStrRecipes, setLocalStrRecipes]);


  let endpointUrl = `${mainUrl}&q=${query}&app_id=${clientID}&app_key=${accessKey}${
    diet && "&diet=" + diet
  }${health && "&health=" + health}${cuisine && "&cuisineType=" + cuisine}${
    meal && "&mealType=" + meal
  }${dish && "&dishType=" + dish}${calories && "&calories=" + calories}`;
  
  let url;

  if (page === 1 && query) {
    url = endpointUrl;
  } else if (page >= 1 && !query) {
    url = nextPage;
  }

  const fetchRecipes = async () => {
    const saveQuery = (someQuery) => {
      setLastQuery(someQuery);
      localStorage.setItem("lastQuery", JSON.stringify(someQuery));
    };

    const nextPage = (someData, someLink) => {
      if (someLink !== 1) {
        setNextPage("");
        localStorage.setItem("nextPage", JSON.stringify(""));
      } else {
        setNextPage(someData._links.next.href);
        localStorage.setItem(
          "nextPage",
          JSON.stringify(someData._links.next.href)
        );
      }
    };

    const pageNData = (p, d) => {
      localStorage.setItem("page", JSON.stringify(p));
      setRecipesData(d);
      localStorage.setItem("recipes-data", JSON.stringify(d));
    };

    try {
      if (page === 1 && query) {
        setIsLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;

        setPage(page + 1);
        // localStorage.setItem("page", JSON.stringify(page));
        // setRecipesData(data);
        // localStorage.setItem("recipes-data", JSON.stringify(data));
        pageNData(page, data);
        saveQuery(query);

        console.log(data);
        // console.log(lastQuery);

        // nextPageLink === 1 && nextPage(data);
        // if (nextPageLink !== 1) {
        //   setNextPage("");
        //   localStorage.setItem("nextPage", JSON.stringify(""));
        // } else {
        // }
        nextPage(data, nextPageLink);

        setRecipes(recipesArray);
        localStorage.setItem("recipes", JSON.stringify([...recipesArray]));

        data.hits.length === 0 && setIsError(true);
        setCurrentPath(window.location.pathname);

        setIsLoading(false);
      }

      if (page >= 1 && !query) {
        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;

        // localStorage.setItem("page", JSON.stringify(page));
        // setRecipesData(data);
        // localStorage.setItem("recipes-data", JSON.stringify(data));
        pageNData(page, data);
        // saveQuery(query);
        // console.log(lastQuery);

        // if (nextPageLink !== 1) {
        //   setNextPage("");
        //   localStorage.setItem("nextPage", JSON.stringify(""));
        // } else {
        //   nextPage(data);
        // }
        nextPage(data, nextPageLink);

        // console.log(data);

        setRecipes([...recipes, ...recipesArray]);

        localStorage.setItem(
          "recipes",
          JSON.stringify([...recipes, ...recipesArray])
        );

        data.hits.length === 0 && setIsError(true);
        setNextPageLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        fetchRecipes,
        recipes,
        path,
        setPath,
        isLoading,
        isError,
        setIsError,
        setIsLoading,
        recipe,
        setRecipe,
        localStrRecipes,
        setLocalStrRecipes,
        rotate,
        setRotate,
        nextPageLoading,
        setNextPageLoading,
        setPage,
        page,
        nextPage,
        diet,
        setDiet,
        health,
        setHealth,
        meal,
        setMeal,
        cuisine,
        setCuisine,
        dish,
        setDish,
        calories,
        setCalories,
        lastQuery,
        setLastQuery,
        isModal,
        setIsModal,
        email,
        setEmail,
        queryPath,
        setQueryPath,
        localStrPath,
        setLocalStrPath,
        recipesData,
        setRecipesData,
        currentPath,
        setCurrentPath,
        minInput,
        setMinInput,
        maxInput,
        setMaxInput,
        changePreferences,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
