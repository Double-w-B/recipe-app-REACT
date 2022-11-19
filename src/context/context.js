import React, { useReducer } from "react";
import reducer from "../reducer/reducer";
import * as actions from "../reducer/actions";

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

  const rotateStar = () => {
    dispatch({ type: actions.ROTATE_STAR });
    setTimeout(() => {
      dispatch({ type: actions.REFRESH_STAR });
    }, 300);
  };

  const handleError = (action) => {
    dispatch({ type: actions.HANDLE_ERROR, payload: action });
  };

  const loadingToFalse = () => {
    dispatch({ type: actions.GET_RECIPES_SUCCESS });
  };
  const setNextPageLoading = () => {
    dispatch({ type: actions.NEXT_PAGE_LOADING });
  };
  const createQuery = (someQuery) => {
    dispatch({ type: actions.CREATE_A_QUERY, payload: someQuery });
  };
  const clearQuery = () => {
    dispatch({ type: actions.CLEAR_THE_QUERY });
  };

  const handleQuery = (lastQuery) => {
    dispatch({ type: actions.HANDLE_LAST_QUERY, payload: lastQuery });
  };

  const changeThePage = (number) => {
    dispatch({ type: actions.CHANGE_THE_PAGE, payload: number });
  };

  const changeThePath = (newPath) => {
    dispatch({ type: actions.CHANGE_CURRENT_PATH, payload: newPath });
  };

  const newPath = (newPath) => {
    dispatch({ type: actions.SET_PATH, payload: newPath });
  };

  const newQueryPath = (newPath) => {
    dispatch({ type: actions.SET_QUERY_PATH, payload: newPath });
  };
  const newLocalStrPath = (newPath) => {
    dispatch({ type: actions.SET_LOCALSTR_PATH, payload: newPath });
  };

  const setRecipe = (newRecipe) => {
    dispatch({
      type: actions.GET_RECIPE,
      payload: !newRecipe ? "recipe" : newRecipe,
    });
  };
  const updateLocalStrRecipes = (newRecipe) => {
    dispatch({
      type: actions.UPDATE_LOCALSTR_RECIPES,
      payload: newRecipe,
    });
  };
  const handleModal = () => {
    dispatch({ type: actions.HANDLE_MODAL, payload: !state.isModal });
  };
  const saveEmail = (email) => {
    dispatch({ type: actions.SAVE_EMAIL, payload: email });
  };

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

  React.useEffect(() => {
    !state.email &&
      dispatch({
        type: actions.HANDLE_MODAL,
        payload: !state.isModal,
      });
    // eslint-disable-next-line
  }, [state.email]);

  React.useEffect(() => {
    state.query && dispatch({ type: actions.CHANGE_THE_PAGE, payload: 1 });
  }, [state.query]);

  React.useEffect(() => {
    (state.minInput > 0 || state.maxInput < 1000) &&
      dispatch({
        type: actions.CHANGE_CALORIES,
        payload: `${state.minInput}-${state.maxInput}`,
      });
  }, [state.minInput, state.maxInput]);

  React.useEffect(() => {
    sessionStorage.setItem(
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
      dispatch({ type: actions.HANDLE_LAST_QUERY, payload: someQuery });

      sessionStorage.setItem("lastQuery", JSON.stringify(someQuery));
    };

    const nextPage = (someData, someLink) => {
      if (someLink !== 1) {
        dispatch({ type: actions.SET_NEXT_PAGE, payload: "" });
        sessionStorage.setItem("nextPage", JSON.stringify(""));
      } else {
        dispatch({
          type: actions.SET_NEXT_PAGE,
          payload: someData._links.next.href,
        });
        sessionStorage.setItem(
          "nextPage",
          JSON.stringify(someData._links.next.href)
        );
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

        dispatch({
          type: actions.CHANGE_THE_PAGE,
          payload: state.page + 1,
        });

        pageNData(state.page, data);
        saveQuery(state.query);

        // console.log(data);

        nextPage(data, nextPageLink);

        dispatch({
          type: actions.GET_ALL_RECIPES,
          payload: recipesArray,
        });
        sessionStorage.setItem("recipes", JSON.stringify([...recipesArray]));

        data.hits.length === 0 &&
          dispatch({ type: actions.HANDLE_ERROR, payload: true });

        dispatch({
          type: actions.CHANGE_CURRENT_PATH,
          payload: window.location.pathname,
        });

        dispatch({ type: actions.GET_RECIPES_SUCCESS });
      }

      if (state.page >= 1 && !state.query) {
        const response = await fetch(url);
        const data = await response.json();
        const recipesArray = data.hits;
        const nextPageLink = Object.keys(data._links).length;

        pageNData(state.page, data);

        nextPage(data, nextPageLink);

        dispatch({
          type: actions.GET_ALL_RECIPES,
          payload: [...state.recipes, ...recipesArray],
        });

        sessionStorage.setItem(
          "recipes",
          JSON.stringify([...state.recipes, ...recipesArray])
        );

        data.hits.length === 0 &&
          dispatch({ type: actions.HANDLE_ERROR, payload: true });
        dispatch({ type: actions.NEXT_PAGE_LOADED });
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
        handleModal,
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
