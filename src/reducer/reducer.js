import * as actionsModule from "../actions";

const reducer = (state, action) => {
  if (action.type === actionsModule.GET_RECIPES_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === actionsModule.GET_RECIPES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === actionsModule.HANDLE_ERROR) {
    return {
      ...state,
      isError: action.payload,
    };
  }

  if (action.type === actionsModule.ROTATE_STAR) {
    return {
      ...state,
      rotate: true,
    };
  }
  if (action.type === actionsModule.REFRESH_STAR) {
    return {
      ...state,
      rotate: false,
    };
  }

  if (action.type === actionsModule.NEXT_PAGE_LOADING) {
    return {
      ...state,
      nextPageLoading: true,
    };
  }
  if (action.type === actionsModule.NEXT_PAGE_LOADED) {
    return {
      ...state,
      nextPageLoading: false,
    };
  }

  if (action.type === actionsModule.CREATE_A_QUERY) {
    return {
      ...state,
      query: action.payload,
    };
  }
  if (action.type === actionsModule.CLEAR_THE_QUERY) {
    return {
      ...state,
      query: "",
    };
  }

  if (action.type === actionsModule.HANDLE_LAST_QUERY) {
    return {
      ...state,
      lastQuery: action.payload,
    };
  }

  if (action.type === actionsModule.CHANGE_THE_PAGE) {
    return {
      ...state,
      page: action.payload,
    };
  }
  if (action.type === actionsModule.SET_NEXT_PAGE) {
    return {
      ...state,
      nextPage: action.payload,
    };
  }
  if (action.type === actionsModule.SET_PATH) {
    return {
      ...state,
      path: action.payload,
    };
  }
  if (action.type === actionsModule.SET_QUERY_PATH) {
    return {
      ...state,
      queryPath: action.payload,
    };
  }
  if (action.type === actionsModule.SET_LOCALSTR_PATH) {
    return {
      ...state,
      localStrPath: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_CURRENT_PATH) {
    return {
      ...state,
      currentPath: action.payload,
    };
  }
  if (action.type === actionsModule.GET_RECIPES_DATA) {
    return {
      ...state,
      recipesData: action.payload,
    };
  }
  if (action.type === actionsModule.GET_RECIPE) {
    return {
      ...state,
      recipe: action.payload,
    };
  }
  if (action.type === actionsModule.GET_ALL_RECIPES) {
    return {
      ...state,
      recipes: action.payload,
    };
  }
  if (action.type === actionsModule.UPDATE_LOCALSTR_RECIPES) {
    return {
      ...state,
      localStrRecipes: action.payload,
    };
  }

  if (action.type === actionsModule.SHOW_HIDE_MODAL) {
    return {
      ...state,
      isModal: action.payload,
    };
  }
  if (action.type === actionsModule.SAVE_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }

  /* Preferences */
  if (action.type === actionsModule.CHANGE_COLORIES) {
    return {
      ...state,
      calories: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_DIET) {
    return {
      ...state,
      diet: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_HEALTH) {
    return {
      ...state,
      health: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_MEAL) {
    return {
      ...state,
      meal: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_CUISINE) {
    return {
      ...state,
      cuisine: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_DISH) {
    return {
      ...state,
      dish: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_MININPUT) {
    return {
      ...state,
      minInput: action.payload,
    };
  }
  if (action.type === actionsModule.CHANGE_MAXINPUT) {
    return {
      ...state,
      maxInput: action.payload,
    };
  }

  //   return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
