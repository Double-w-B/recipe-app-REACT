import React, { useReducer } from "react";
import reducer from "../reducer/reducer";

import { ROTATE_STAR, REFRESH_STAR, GET_RECIPES_BEGIN } from "../actions";
import { GET_RECIPES_SUCCESS, HANDLE_LAST_QUERY } from "../actions";
import { HANDLE_ERROR, SET_NEXT_PAGE, NEXT_PAGE_LOADING } from "../actions";
import { NEXT_PAGE_LOADED, CREATE_A_QUERY, CLEAR_THE_QUERY } from "../actions";
import { CHANGE_THE_PAGE, SET_PATH, SET_QUERY_PATH } from "../actions";
import { SET_LOCALSTR_PATH, CHANGE_CURRENT_PATH, GET_RECIPE } from "../actions";
import { GET_ALL_RECIPES, GET_RECIPES_DATA } from "../actions";
import { UPDATE_LOCALSTR_RECIPES, SHOW_HIDE_MODAL } from "../actions";
import { SAVE_EMAIL, CHANGE_COLORIES, CHANGE_DIET } from "../actions";
import { CHANGE_HEALTH, CHANGE_MEAL, CHANGE_CUISINE } from "../actions";
import { CHANGE_DISH, CHANGE_MININPUT, CHANGE_MAXINPUT } from "../actions";

const mainUrl = "https://api.edamam.com/api/recipes/v2?type=public";

const clientID = `${process.env.REACT_APP_ID_KEY}`;
const accessKey = `${process.env.REACT_APP_ACCESS_KEY}`;

const initialState = {
  rotate: false,
  isLoading: false,
  isError: false,
  isModal: false,
  nextPageLoading: false,
  query: "",
  lastQuery: JSON.parse(localStorage.getItem("lastQuery")) || "",
  page: JSON.parse(localStorage.getItem("page")) || 1,
  nextPage: JSON.parse(localStorage.getItem("nextPage")) || "",
  currentPath: window.location.pathname,
  path: JSON.parse(localStorage.getItem("path")) || "path",
  queryPath: JSON.parse(localStorage.getItem("queryPath")) || "",
  localStrPath: "recipes",
  localStrRecipes: JSON.parse(localStorage.getItem("saved-recipes") || "[]"),
  recipesData: JSON.parse(localStorage.getItem("recipes-data")) || "",
  recipe: "recipe",
  recipes: JSON.parse(localStorage.getItem("recipes")) || "",
  email: JSON.parse(localStorage.getItem("newsletter")) || "",
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

  const rotateStar = () => {
    dispatch({ type: ROTATE_STAR });
    setTimeout(() => {
      dispatch({ type: REFRESH_STAR });
    }, 300);
  };

  const handleError = (action) => {
    dispatch({ type: HANDLE_ERROR, payload: action });
  };

  const loadingToFalse = () => {
    dispatch({ type: GET_RECIPES_SUCCESS });
  };
  const setNextPageLoading = () => {
    dispatch({ type: NEXT_PAGE_LOADING });
  };
  const createQuery = (someQuery) => {
    dispatch({ type: CREATE_A_QUERY, payload: someQuery });
  };
  const clearQuery = () => {
    dispatch({ type: CLEAR_THE_QUERY });
  };

  const handleQuery = (lastQuery) => {
    dispatch({ type: HANDLE_LAST_QUERY, payload: lastQuery });
  };

  const changeThePage = (number) => {
    dispatch({ type: CHANGE_THE_PAGE, payload: number });
  };

  const changeThePath = (newPath) => {
    dispatch({ type: CHANGE_CURRENT_PATH, payload: newPath });
  };

  const newPath = (newPath) => {
    dispatch({ type: SET_PATH, payload: newPath });
  };

  const newQueryPath = (newPath) => {
    dispatch({ type: SET_QUERY_PATH, payload: newPath });
  };
  const newLocalStrPath = (newPath) => {
    dispatch({ type: SET_LOCALSTR_PATH, payload: newPath });
  };

  const setRecipe = (newRecipe) => {
    dispatch({ type: GET_RECIPE, payload: !newRecipe ? "recipe" : newRecipe });
  };
  const updateLocalStrRecipes = (newRecipe) => {
    dispatch({ type: UPDATE_LOCALSTR_RECIPES, payload: newRecipe });
  };
  const showHideModal = () => {
    dispatch({ type: SHOW_HIDE_MODAL, payload: !state.isModal });
  };
  const saveEmail = (email) => {
    dispatch({ type: SAVE_EMAIL, payload: email });
  };

  const changePreferences = (type, change) => {
    type === "calories" && dispatch({ type: CHANGE_COLORIES, payload: change });
    type === "diet" && dispatch({ type: CHANGE_DIET, payload: change });
    type === "health" && dispatch({ type: CHANGE_HEALTH, payload: change });
    type === "meal" && dispatch({ type: CHANGE_MEAL, payload: change });
    type === "cuisine" && dispatch({ type: CHANGE_CUISINE, payload: change });
    type === "dish" && dispatch({ type: CHANGE_DISH, payload: change });
    type === "minInput" && dispatch({ type: CHANGE_MININPUT, payload: change });
    type === "maxInput" && dispatch({ type: CHANGE_MAXINPUT, payload: change });
  };

  React.useEffect(() => {
    !state.email &&
      dispatch({ type: SHOW_HIDE_MODAL, payload: !state.isModal });
    // eslint-disable-next-line
  }, [state.email]);

  React.useEffect(() => {
    state.query && dispatch({ type: CHANGE_THE_PAGE, payload: 1 });
  }, [state.query]);

  React.useEffect(() => {
    (state.minInput > 0 || state.maxInput < 1000) &&
      dispatch({
        type: CHANGE_COLORIES,
        payload: `${state.minInput}-${state.maxInput}`,
      });
  }, [state.minInput, state.maxInput]);

  React.useEffect(() => {
    localStorage.setItem(
      "saved-recipes",
      JSON.stringify(state.localStrRecipes)
    );
  }, [state.localStrRecipes, state.setLocalStrRecipes]);

  let endpointUrl = `${mainUrl}&q=${
    state.query
  }&app_id=${clientID}&app_key=${accessKey}${
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
      dispatch({ type: HANDLE_LAST_QUERY, payload: someQuery });

      localStorage.setItem("lastQuery", JSON.stringify(someQuery));
    };

    const nextPage = (someData, someLink) => {
      if (someLink !== 1) {
        dispatch({ type: SET_NEXT_PAGE, payload: "" });
        localStorage.setItem("nextPage", JSON.stringify(""));
      } else {
        dispatch({ type: SET_NEXT_PAGE, payload: someData._links.next.href });
        localStorage.setItem(
          "nextPage",
          JSON.stringify(someData._links.next.href)
        );
      }
    };

    const pageNData = (p, d) => {
      localStorage.setItem("page", JSON.stringify(p));
      dispatch({ type: GET_RECIPES_DATA, payload: d });
      localStorage.setItem("recipes-data", JSON.stringify(d));
    };

    try {
      if (state.page === 1 && state.query) {
        dispatch({ type: GET_RECIPES_BEGIN });

        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;

        dispatch({ type: CHANGE_THE_PAGE, payload: state.page + 1 });

        pageNData(state.page, data);
        saveQuery(state.query);

        // console.log(data);

        nextPage(data, nextPageLink);

        dispatch({ type: GET_ALL_RECIPES, payload: recipesArray });
        localStorage.setItem("recipes", JSON.stringify([...recipesArray]));

        data.hits.length === 0 &&
          dispatch({ type: HANDLE_ERROR, payload: true });

        dispatch({
          type: CHANGE_CURRENT_PATH,
          payload: window.location.pathname,
        });

        dispatch({ type: GET_RECIPES_SUCCESS });
      }

      if (state.page >= 1 && !state.query) {
        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;

        pageNData(state.page, data);

        nextPage(data, nextPageLink);

        // console.log(data);

        dispatch({
          type: GET_ALL_RECIPES,
          payload: [...state.recipes, ...recipesArray],
        });

        localStorage.setItem(
          "recipes",
          JSON.stringify([...state.recipes, ...recipesArray])
        );

        data.hits.length === 0 &&
          dispatch({ type: HANDLE_ERROR, payload: true });
        dispatch({ type: NEXT_PAGE_LOADED });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchRecipes,
        setNextPageLoading,
        rotateStar,
        loadingToFalse,
        createQuery,
        clearQuery,
        changeThePage,
        changeThePath,
        newPath,
        newQueryPath,
        newLocalStrPath,
        setRecipe,
        updateLocalStrRecipes,
        showHideModal,
        saveEmail,
        changePreferences,
        handleError,
        handleQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
