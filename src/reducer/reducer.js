import {
  ROTATE_STAR,
  REFRESH_STAR,
  GET_RECIPES_BEGIN,
  GET_RECIPES_SUCCESS,
  HANDLE_ERROR,
  SET_NEXT_PAGE,
  NEXT_PAGE_LOADING,
  NEXT_PAGE_LOADED,
  CREATE_A_QUERY,
  CLEAR_THE_QUERY,
  HANDLE_LAST_QUERY,
  CHANGE_THE_PAGE,
  SET_PATH,
  SET_QUERY_PATH,
  SET_LOCALSTR_PATH,
  CHANGE_CURRENT_PATH,
  GET_RECIPES_DATA,
  GET_RECIPE,
  GET_ALL_RECIPES,
  UPDATE_LOCALSTR_RECIPES,
  SAVE_EMAIL,
  SHOW_HIDE_MODAL,
  CHANGE_COLORIES,
  CHANGE_DIET,
  CHANGE_HEALTH,
  CHANGE_MEAL,
  CHANGE_CUISINE,
  CHANGE_DISH,
  CHANGE_MININPUT,
  CHANGE_MAXINPUT,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === GET_RECIPES_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_RECIPES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === HANDLE_ERROR) {
    return {
      ...state,
      isError: action.payload,
    };
  }

  if (action.type === ROTATE_STAR) {
    return {
      ...state,
      rotate: true,
    };
  }
  if (action.type === REFRESH_STAR) {
    return {
      ...state,
      rotate: false,
    };
  }

  if (action.type === NEXT_PAGE_LOADING) {
    return {
      ...state,
      nextPageLoading: true,
    };
  }
  if (action.type === NEXT_PAGE_LOADED) {
    return {
      ...state,
      nextPageLoading: false,
    };
  }

  if (action.type === CREATE_A_QUERY) {
    return {
      ...state,
      query: action.payload,
    };
  }
  if (action.type === CLEAR_THE_QUERY) {
    return {
      ...state,
      query: "",
    };
  }

  if (action.type === HANDLE_LAST_QUERY) {
    return {
      ...state,
      lastQuery: action.payload,
    };
  }

  if (action.type === CHANGE_THE_PAGE) {
    return {
      ...state,
      page: action.payload,
    };
  }
  if (action.type === SET_NEXT_PAGE) {
    return {
      ...state,
      nextPage: action.payload,
    };
  }
  if (action.type === SET_PATH) {
    return {
      ...state,
      path: action.payload,
    };
  }
  if (action.type === SET_QUERY_PATH) {
    return {
      ...state,
      queryPath: action.payload,
    };
  }
  if (action.type === SET_LOCALSTR_PATH) {
    return {
      ...state,
      localStrPath: action.payload,
    };
  }
  if (action.type === CHANGE_CURRENT_PATH) {
    return {
      ...state,
      currentPath: action.payload,
    };
  }
  if (action.type === GET_RECIPES_DATA) {
    return {
      ...state,
      recipesData: action.payload,
    };
  }
  if (action.type === GET_RECIPE) {
    return {
      ...state,
      recipe: action.payload,
    };
  }
  if (action.type === GET_ALL_RECIPES) {
    return {
      ...state,
      recipes: action.payload,
    };
  }
  if (action.type === UPDATE_LOCALSTR_RECIPES) {
    return {
      ...state,
      localStrRecipes: action.payload,
    };
  }

  if (action.type === SHOW_HIDE_MODAL) {
    return {
      ...state,
      isModal: action.payload,
    };
  }
  if (action.type === SAVE_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  
  /* Preferences */
  if (action.type === CHANGE_COLORIES) {
    return {
      ...state,
      calories: action.payload,
    };
  }
  if (action.type === CHANGE_DIET) {
    return {
      ...state,
      diet: action.payload,
    };
  }
  if (action.type === CHANGE_HEALTH) {
    return {
      ...state,
      health: action.payload,
    };
  }
  if (action.type === CHANGE_MEAL) {
    return {
      ...state,
      meal: action.payload,
    };
  }
  if (action.type === CHANGE_CUISINE) {
    return {
      ...state,
      cuisine: action.payload,
    };
  }
  if (action.type === CHANGE_DISH) {
    return {
      ...state,
      dish: action.payload,
    };
  }
  if (action.type === CHANGE_MININPUT) {
    return {
      ...state,
      minInput: action.payload,
    };
  }
  if (action.type === CHANGE_MAXINPUT) {
    return {
      ...state,
      maxInput: action.payload,
    };
  }

  //   return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
