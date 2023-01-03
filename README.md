# ![logo(1)](https://user-images.githubusercontent.com/75247773/206032249-f4685876-32cc-4880-9920-5361cb4b5e73.png) FoodieMood

## Table of contents

- [Authorization](#authorization)
- [Newsletter](#newsletter)
- [Search filters](#search-filters)
- [Search results](#search-results)
- [Recipe](#recipe)
- [Saved recipes](#saved-recipes)
- [Errors](#errors)
- [RWD](#rwd)

## General info

Full-stack web application with a recipe search feature and over the 60 diet and health filters to use for any popular diet or major health condition. User gets over 2.3 million recipes in English with the most accurate automated nutrition analysis. Detailed nutrition breakdown of each recipe with 25+ nutrients and appropriateness for all major diets. All that data comes from the Recipe Search API (https://developer.edamam.com/edamam-recipe-api).

The main idea of a project is to find a recipe according to the preferences and check out the ingredients of a dish. Create an account and save recipes in a database.

Back-end part of a project: https://github.com/Double-w-B/recipe-app-API-NODE

#### Technology: <React.js + styled-components + API + RWD + Node.js + Express.js + MongoDB>

![img-1](https://user-images.githubusercontent.com/75247773/210377850-77cd1b74-00f1-4b5d-a441-bf14136e0e41.jpg)

## Authorization

Authorized users can save recipes to a database and manage their personal data.

![img-15](https://user-images.githubusercontent.com/75247773/210381627-69b3e70d-269a-47a0-9084-cb80f4b35b58.jpg)

![img-14](https://user-images.githubusercontent.com/75247773/210381577-43fe8745-8e51-4716-b259-41572492eb72.jpg)

## Newsletter

Popup newsletter modal overlay to add an email address to a newsletter database.

![img-2](https://user-images.githubusercontent.com/75247773/210377803-ed254a7b-641f-4dd5-8762-9e2ab28e1ec1.jpg)

## Search filters

There is a possibility to narrow down the search query by selecting preferences among over the 60 diet and health filters.

![img-3](https://user-images.githubusercontent.com/75247773/210383318-5fe4a1e2-be38-49c7-9aca-1bf406170053.jpg)

## Search results

User gets the amount of recipes which are available in a database according to the query and selected filters.

![img-4](https://user-images.githubusercontent.com/75247773/210377713-46b46273-3795-408f-b56a-47ab4ecd813e.jpg)

## Recipe

Each recipe includes an image, detailed information, link to the full recipe, nutritients and ingredients of a dish. To save the recipe to the localStorage, user has to click the star in a top right corner of the recipe.

![img-5](https://user-images.githubusercontent.com/75247773/210377887-4d65eb38-ad2a-4c85-8d4d-74bbadfde49b.jpg)

![img-6](https://user-images.githubusercontent.com/75247773/210377894-e8e4f8a4-9244-45f4-a192-30cc3a67c028.jpg)

## Saved recipes

All saved food recipes are stored in a MongoDB database. To see saved recipes the user has to click a menu button and then Saved Recipes.

![img-7](https://user-images.githubusercontent.com/75247773/210378509-956c99e0-dd85-4bef-9da4-32605f65eea0.jpg)

If there are no recipes stored in a database, the user will see the proper information.

![img-8](https://user-images.githubusercontent.com/75247773/210378538-606721dd-2b18-49ab-b98b-89cac38311d0.jpg)

## Errors

If a key word was passed with a mistake or there is no such recipe or ingredient in an API data, then the app will show suitable information and automatically redirect to a home page.

![img-9](https://user-images.githubusercontent.com/75247773/210379441-2251a6a8-8e9e-4226-9d3e-10d282f3faae.jpg)

If there is no a page the user is looking for then the app will inform about that and automatically redirect to a home page.

![img-10](https://user-images.githubusercontent.com/75247773/210379507-1a00d0fe-bd43-4ba1-8a07-257dde836a2c.jpg)

## RWD

Responsive web design approach gives the possibility to use the app on the devices with a different screen sizes.

![img-13](https://user-images.githubusercontent.com/75247773/210380237-ca4093cb-08fd-49ae-b799-e149ae1f6f17.png)
