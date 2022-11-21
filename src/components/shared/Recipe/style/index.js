import styled from "styled-components";
import { Container, Image } from "./Recipe.style";
import {
  Info,
  SaveButton,
  ShortInfo,
  HealthLabels,
  Link,
} from "./MainInfo.style";
import { Ingredients, IngredientsContainer } from "./Ingredients.style";
import { Ingredient, IngredientImage } from "./SingleIngredient.style";
import { Nutrition, Nutrients, ShowMoreButton } from "./Nutrition.style";

const StyledRecipe = styled.article`
  width: 70%;
  min-height: 84vh;
  margin: 0 auto 2rem auto;

  @media screen and (max-width: 1250px) {
    width: 80%;
  }

  @media screen and (max-width: 1060px) {
    width: 85%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

StyledRecipe.Container = Container;
StyledRecipe.Image = Image;
StyledRecipe.Info = Info;
StyledRecipe.SaveButton = SaveButton;
StyledRecipe.ShortInfo = ShortInfo;
StyledRecipe.HealthLabels = HealthLabels;
StyledRecipe.Link = Link;

StyledRecipe.Ingredients = Ingredients;
StyledRecipe.IngredientsContainer = IngredientsContainer;
StyledRecipe.Ingredient = Ingredient;
StyledRecipe.IngredientImage = IngredientImage;

StyledRecipe.Nutrition = Nutrition;
StyledRecipe.Nutrients = Nutrients;
StyledRecipe.ShowMoreButton = ShowMoreButton;

export default StyledRecipe;
