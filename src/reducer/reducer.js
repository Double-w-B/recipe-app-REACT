import * as actions from "./actions";

const reducer = (state, action) => {
  if (action.type === actions.GET_RECIPES_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === actions.GET_RECIPES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === actions.HANDLE_ERROR) {
    return {
      ...state,
      isError: action.payload,
    };
  }

  if (action.type === actions.NEXT_PAGE_LOADING) {
    return {
      ...state,
      isNextPageLoading: true,
    };
  }

  if (action.type === actions.NEXT_PAGE_LOADED) {
    return {
      ...state,
      isNextPageLoading: false,
    };
  }

  if (action.type === actions.CREATE_A_QUERY) {
    return {
      ...state,
      query: action.payload,
    };
  }

  if (action.type === actions.CLEAR_THE_QUERY) {
    return {
      ...state,
      query: "",
    };
  }

  if (action.type === actions.HANDLE_LAST_QUERY) {
    return {
      ...state,
      lastQuery: action.payload,
    };
  }

  if (action.type === actions.CHANGE_THE_PAGE) {
    return {
      ...state,
      page: action.payload,
    };
  }

  if (action.type === actions.SET_NEXT_PAGE) {
    return {
      ...state,
      nextPage: action.payload,
    };
  }

  if (action.type === actions.SET_PATH) {
    return {
      ...state,
      path: action.payload,
    };
  }

  if (action.type === actions.SET_QUERY_PATH) {
    return {
      ...state,
      queryPath: action.payload,
    };
  }

  if (action.type === actions.SET_LOCALSTR_PATH) {
    return {
      ...state,
      localStrPath: action.payload,
    };
  }

  if (action.type === actions.CHANGE_CURRENT_PATH) {
    return {
      ...state,
      currentPath: action.payload,
    };
  }

  if (action.type === actions.GET_RECIPES_DATA) {
    return {
      ...state,
      recipesData: action.payload,
    };
  }

  if (action.type === actions.GET_RECIPE) {
    return {
      ...state,
      recipe: action.payload,
    };
  }

  if (action.type === actions.GET_ALL_RECIPES) {
    return {
      ...state,
      recipes: action.payload,
    };
  }

  if (action.type === actions.UPDATE_LOCALSTR_RECIPES) {
    return {
      ...state,
      localStrRecipes: action.payload,
    };
  }

  if (action.type === actions.HANDLE_MODAL) {
    return {
      ...state,
      isModal: action.payload,
    };
  }

  if (action.type === actions.SHOW_NEWSLETTER) {
    return {
      ...state,
      isNewsletter: action.payload,
    };
  }

  if (action.type === actions.HIDE_NEWSLETTER) {
    return {
      ...state,
      isNewsletter: action.payload,
    };
  }
  if (action.type === actions.HANDLE_MENU) {
    return {
      ...state,
      isMenu: action.payload,
    };
  }

  if (action.type === actions.SAVE_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === actions.SHOW_AUTH) {
    return {
      ...state,
      isAuth: action.payload,
    };
  }
  if (action.type === actions.HIDE_AUTH) {
    return {
      ...state,
      isAuth: action.payload,
    };
  }

  /* Preferences */
  if (action.type === actions.CHANGE_CALORIES) {
    return {
      ...state,
      calories: action.payload,
    };
  }
  if (action.type === actions.CHANGE_DIET) {
    return {
      ...state,
      diet: action.payload,
    };
  }
  if (action.type === actions.CHANGE_HEALTH) {
    return {
      ...state,
      health: action.payload,
    };
  }
  if (action.type === actions.CHANGE_MEAL) {
    return {
      ...state,
      meal: action.payload,
    };
  }
  if (action.type === actions.CHANGE_CUISINE) {
    return {
      ...state,
      cuisine: action.payload,
    };
  }
  if (action.type === actions.CHANGE_DISH) {
    return {
      ...state,
      dish: action.payload,
    };
  }
  if (action.type === actions.CHANGE_MININPUT) {
    return {
      ...state,
      minInput: action.payload,
    };
  }
  if (action.type === actions.CHANGE_MAXINPUT) {
    return {
      ...state,
      maxInput: action.payload,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
