import CookingTime from "./CookingTime";
import PreferencesFilter from "./PreferencesFilter";
import RangeFilter from "./RangeFilter";
import RecipeInfo from "./RecipeInfo";
import RecipeNutrition from "./RecipeNutrition";
import RecipeIngredients from "./RecipeIngredients";
import NavbarResults from "./NavbarResults";
import NavbarInfoIcon from "./NavbarInfoIcon";

export const checkLength = (label) => {
  const words = label.split(" ");
  return `${words.slice(0, 3).join(" ")}...`;
};

export {
  CookingTime,
  PreferencesFilter,
  RangeFilter,
  RecipeInfo,
  RecipeNutrition,
  RecipeIngredients,
  NavbarResults,
  NavbarInfoIcon,
};
