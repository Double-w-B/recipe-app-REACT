import React, { useReducer } from "react";
import reducer from "../reducer/reducer";
import * as actions from "../reducer/actions";

const mainUrl = "https://api.edamam.com/api/recipes/v2?type=public";

const clientID = `${process.env.REACT_APP_ID_KEY}`;
const accessKey = `${process.env.REACT_APP_ACCESS_KEY}`;

const initialState = {
  isLoading: false,
  isError: false,
  isModal: false,
  isNewsletter: false,
  isMenu: false,
  isAuth: false,
  isNextPageLoading: false,
  userData: "",
  query: "",
  lastQuery: JSON.parse(sessionStorage.getItem("lastQuery")) || "",
  page: JSON.parse(sessionStorage.getItem("page")) || 1,
  nextPage: JSON.parse(sessionStorage.getItem("nextPage")) || "",
  currentPath: window.location.pathname,
  path: JSON.parse(sessionStorage.getItem("path")) || "path",
  queryPath: JSON.parse(sessionStorage.getItem("queryPath")) || "",
  localStrPath: "recipes",
  localStrRecipes: JSON.parse(sessionStorage.getItem("saved-recipes") || "[]"),
  recipesData: JSON.parse(sessionStorage.getItem("recipes-data")) || "",
  recipe: "recipe",
  recipes: JSON.parse(sessionStorage.getItem("recipes")) || "",
  email: JSON.parse(sessionStorage.getItem("newsletter")) || "",
  diet: "",
  health: "",
  meal: "",
  cuisine: "",
  dish: "",
  calories: "",
  minInput: "0",
  maxInput: "1000",
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    if (!state.email) {
      handleModal();
      showNewsletter();
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    state.query && dispatch({ type: actions.CHANGE_THE_PAGE, payload: 1 });
  }, [state.query]);

  React.useEffect(() => {
    if (state.minInput > 0 || state.maxInput < 1000) {
      const range = `${state.minInput}-${state.maxInput}`;
      dispatch({ type: actions.CHANGE_CALORIES, payload: range });
    }
  }, [state.minInput, state.maxInput]);

  React.useEffect(() => {
    const data = JSON.stringify(state.localStrRecipes);
    sessionStorage.setItem("saved-recipes", data);
  }, [state.localStrRecipes, state.setLocalStrRecipes]);

  /* Query */
  const createQuery = (someQuery) => {
    dispatch({ type: actions.CREATE_A_QUERY, payload: someQuery });
  };
  const clearQuery = () => {
    dispatch({ type: actions.CLEAR_THE_QUERY });
  };
  const handleLastQuery = (lastQuery) => {
    dispatch({ type: actions.HANDLE_LAST_QUERY, payload: lastQuery });
  };
  /* Query */

  /* Page */
  const changePage = (number) => {
    dispatch({ type: actions.CHANGE_THE_PAGE, payload: number });
  };
  const setNextPageLoading = () => {
    dispatch({ type: actions.NEXT_PAGE_LOADING });
  };
  /* Page */

  /* Path */
  const newPath = (newPath) => {
    dispatch({ type: actions.SET_PATH, payload: newPath });
  };
  const changePath = (newPath) => {
    dispatch({ type: actions.CHANGE_CURRENT_PATH, payload: newPath });
  };
  const newQueryPath = (newPath) => {
    dispatch({ type: actions.SET_QUERY_PATH, payload: newPath });
  };
  const newLocalStrPath = (newPath) => {
    dispatch({ type: actions.SET_LOCALSTR_PATH, payload: newPath });
  };
  /* Path */

  /* Recipe */
  const setRecipe = (newRecipe) => {
    const recipe = !newRecipe ? "recipe" : newRecipe;
    dispatch({ type: actions.GET_RECIPE, payload: recipe });
  };
  /* Recipe */

  /* Email */
  const saveEmail = (email) => {
    dispatch({ type: actions.SAVE_EMAIL, payload: email });
  };
  /* Email */

  /* Storage */
  const updateLocalStrRecipes = (newRecipe) => {
    dispatch({
      type: actions.UPDATE_LOCALSTR_RECIPES,
      payload: newRecipe,
    });
  };
  /* Storage */

  /* Modals */
  const handleModal = () => {
    dispatch({ type: actions.HANDLE_MODAL, payload: !state.isModal });
  };
  const showNewsletter = () => {
    dispatch({ type: actions.SHOW_NEWSLETTER, payload: true });
  };
  const hideNewsletter = () => {
    dispatch({ type: actions.HIDE_NEWSLETTER, payload: false });
  };
  const handleMenu = () => {
    dispatch({ type: actions.HANDLE_MENU, payload: !state.isMenu });
  };
  const showAuthModal = () => {
    dispatch({ type: actions.SHOW_AUTH, payload: true });
  };
  const hideAuthModal = () => {
    dispatch({ type: actions.HIDE_AUTH, payload: false });
  };
  /* Modals */

  /* Authorization */
  const saveUserData = (action) => {
    dispatch({ type: actions.SAVE_USER_DATA, payload: action });
  };
  const removeUserData = (action) => {
    dispatch({ type: actions.REMOVE_USER_DATA, payload: action });
  };
  /* Authorization */

  /* Filters */
  const changePreferences = (type, change) => {
    type === "calories" &&
      dispatch({ type: actions.CHANGE_CALORIES, payload: change });
    type === "diet" && dispatch({ type: actions.CHANGE_DIET, payload: change });
    type === "health" &&
      dispatch({ type: actions.CHANGE_HEALTH, payload: change });
    type === "meal" && dispatch({ type: actions.CHANGE_MEAL, payload: change });
    type === "cuisine" &&
      dispatch({ type: actions.CHANGE_CUISINE, payload: change });
    type === "dish" && dispatch({ type: actions.CHANGE_DISH, payload: change });
    type === "minInput" &&
      dispatch({ type: actions.CHANGE_MININPUT, payload: change });
    type === "maxInput" &&
      dispatch({ type: actions.CHANGE_MAXINPUT, payload: change });
  };
  /* Filters */

  /* Error/Loading */
  const handleError = (action) => {
    dispatch({ type: actions.HANDLE_ERROR, payload: action });
  };
  const loadingToFalse = () => {
    dispatch({ type: actions.GET_RECIPES_SUCCESS });
  };
  /* Error/Loading */

  const endpointUrl = `
  ${mainUrl}&q=${state.query}&app_id=${clientID}&app_key=${accessKey}${
    state.diet && "&diet=" + state.diet
  }${state.health && "&health=" + state.health}${
    state.cuisine && "&cuisineType=" + state.cuisine
  }${state.meal && "&mealType=" + state.meal}${
    state.dish && "&dishType=" + state.dish
  }${state.calories && "&calories=" + state.calories}`;

  let url;

  if (state.page === 1 && state.query) {
    url = endpointUrl;
  } else if (state.page >= 1 && !state.query) {
    url = state.nextPage;
  }

  const fetchRecipes = async () => {
    const saveQuery = (someQuery) => {
      dispatch({ type: actions.HANDLE_LAST_QUERY, payload: someQuery });

      sessionStorage.setItem("lastQuery", JSON.stringify(someQuery));
    };

    const nextPage = (someData, someLink) => {
      if (someLink !== 1) {
        dispatch({ type: actions.SET_NEXT_PAGE, payload: "" });
        sessionStorage.setItem("nextPage", JSON.stringify(""));
      } else {
        const data = someData._links.next.href;
        dispatch({ type: actions.SET_NEXT_PAGE, payload: data });
        sessionStorage.setItem("nextPage", JSON.stringify(data));
      }
    };

    const pageNData = (p, d) => {
      sessionStorage.setItem("page", JSON.stringify(p));
      dispatch({ type: actions.GET_RECIPES_DATA, payload: d });
      sessionStorage.setItem("recipes-data", JSON.stringify(d));
    };

    try {
      if (state.page === 1 && state.query) {
        dispatch({ type: actions.GET_RECIPES_BEGIN });

        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;
        const page = state.page + 1;
        const path = window.location.pathname;

        dispatch({ type: actions.CHANGE_THE_PAGE, payload: page });

        pageNData(state.page, data);
        saveQuery(state.query);

        nextPage(data, nextPageLink);

        dispatch({ type: actions.GET_ALL_RECIPES, payload: recipesArray });
        sessionStorage.setItem("recipes", JSON.stringify([...recipesArray]));

        dispatch({ type: actions.CHANGE_CURRENT_PATH, payload: path });

        dispatch({ type: actions.GET_RECIPES_SUCCESS });

        if (data.hits.length === 0) {
          dispatch({ type: actions.HANDLE_ERROR, payload: true });
        }
      }

      if (state.page >= 1 && !state.query) {
        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;
        const recipes = [...state.recipes, ...recipesArray];

        if (data.hits.length === 0) {
          dispatch({ type: actions.HANDLE_ERROR, payload: true });
        }

        pageNData(state.page, data);

        nextPage(data, nextPageLink);

        dispatch({ type: actions.GET_ALL_RECIPES, payload: recipes });
        sessionStorage.setItem("recipes", JSON.stringify(recipes));

        dispatch({ type: actions.NEXT_PAGE_LOADED });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchRecipes,
        setNextPageLoading,
        loadingToFalse,
        createQuery,
        clearQuery,
        changePage,
        changePath,
        newPath,
        newQueryPath,
        newLocalStrPath,
        setRecipe,
        updateLocalStrRecipes,
        handleModal,
        showNewsletter,
        hideNewsletter,
        handleMenu,
        saveEmail,
        changePreferences,
        handleError,
        handleLastQuery,
        showAuthModal,
        hideAuthModal,
        saveUserData,
        removeUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
