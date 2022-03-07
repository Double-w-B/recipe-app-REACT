import { GiRiceCooker } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";
import { GiHotMeal } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";

const preferencesData = [
  {
    id: "diet",
    label: "Diet",
    name: "dietType",
    icon: <GiFruitBowl />,
    options: [
      "",
      "balanced",
      "high-fiber",
      "high-protein",
      "low-carb",
      "low-fat",
      "low-sodium",
    ],
  },
  {
    id: "health",
    label: "Preference",
    name: "healthLabel",
    icon: <VscSettings />,
    options: [
      "",
      "alcohol-cocktail",
      "alcohol-free",
      "egg-free",
      "fish-free",
      "gluten-free",
      "immuno-supportive",
      "keto-friendly",
      "kosher",
      "low-sugar",
      "paleo",
      "peanut-free",
      "soy-free",
      "sulfite-free",
      "tree-nut-free",
      "vegan",
      "vegetarian",
    ],
  },
  {
    id: "meal",
    label: "Meal",
    name: "mealType",
    icon: <GiKnifeFork />,
    options: ["", "Breakfast", "Lunch", "Dinner", "Snack"],
  },
  {
    id: "cuisine",
    label: "Cuisine",
    name: "cuisineType",
    icon: <GiRiceCooker />,
    options: [
      "",
      "American",
      "Asian",
      "British",
      "Caribbean",
      "Central Europe",
      "Chinese",
      "Eastern Europe",
      "French",
      "Indian",
      "Italian",
      "Japanese",
      "Kosher",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "South American",
      "South East Asian ",
    ],
  },
  {
    id: "dish",
    label: "Dish",
    name: "dishType",
    icon: <GiHotMeal />,
    options: [
      "",
      "Alcohol-cocktail",
      "Biscuits and cookies",
      "Bread",
      "Cereals",
      "Condiments and sauces",
      "Drinks",
      "Desserts",
      "Egg",
      "Main course",
      "Omelet",
      "Pancake",
      "Preps",
      "Preserve",
      "Salad",
      "Sandwiches",
      "Soup",
      "Starter",
    ],
  },
];

export { preferencesData };
