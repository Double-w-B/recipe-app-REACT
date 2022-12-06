# ![logo(1)](https://user-images.githubusercontent.com/75247773/206032249-f4685876-32cc-4880-9920-5361cb4b5e73.png) FoodieMood

## Table of contents

- [Newsletter](#newsletter)
- [Search filters](#search-filters)
- [Search results](#search-results)
- [Recipe](#recipe)
- [Saved recipes](#saved-recipes)
- [Errors](#errors)
- [RWD](#rwd)

## General info

An app with a recipe search feature and over the 60 diet and health filters to use for any popular diet or major health condition.
User gets over 2.3 million recipes in English with the most accurate automated nutrition analysis. Detailed nutrition breakdown of each recipe with 25+ nutrients and appropriateness for all major diets. All that data comes from the Recipe Search API (https://developer.edamam.com/edamam-recipe-api).

The main idea of the app is to find a recipe according the preferences, to check out the ingredients of a dish and to visit the web page of full recipe or to save the recipes to the localStorage for further purposes.

#### Technology: <React.js + CSS + styled-components + RWD>

![2](https://user-images.githubusercontent.com/75247773/206032791-39f6e8c0-1cb2-4e3b-a214-c26e93741efd.jpg)

## Newsletter

In the beginning user will be asked to share an his/her email address to sign up for a newsletter. The data will be saved to the localStorage. Currently that's only imitation of a service promotion to create an individual touch point with newsletter subscriber.

![1](https://user-images.githubusercontent.com/75247773/206033019-424ab40c-f573-4d34-860a-7f322c401560.jpg)

## Search filters

There is a possibility to narrow down the search query by selecting preferences among over the 60 diet and health filters.

![3](https://user-images.githubusercontent.com/75247773/206040632-cc7b4329-8b27-43f2-827e-167e6851bf79.jpg)

## Search results

The User gets the amount of recipes which are available in a database according to the query and selected filters.

![4](https://user-images.githubusercontent.com/75247773/206040533-9cf38eed-6263-40ba-a81e-3abccf8e15be.jpg)

## Recipe

Each recipe includes an image, detailed information, link to the full recipe, nutritients and ingredients of a dish. To save the recipe to the localStorage, user has to click the star in a top right corner of the recipe.

![5](https://user-images.githubusercontent.com/75247773/206040690-ee056407-dbd1-46e3-8eb9-d02c508fb317.jpg)

![6](https://user-images.githubusercontent.com/75247773/206040694-6eda47cd-9956-46c8-8477-a4536f4f4325.jpg)

## Saved recipes

All saved food recipes are stored in the localStorage. To see saved recipes the user has to click a menu button and then Saved Recipes.

![7](https://user-images.githubusercontent.com/75247773/206041048-bd732d26-6665-41d1-89f4-3caf9b78007f.jpg)

If the localStorage is empty, then the user will see that information during visiting saved food recipes storage.

![8](https://user-images.githubusercontent.com/75247773/206041408-3d856fc5-0bae-481e-91aa-6fdf9db78a1a.jpg)

## Errors

If a key word was passed with a mistake or there is no such recipe or ingredient in an API data, then the app will show suitable information and automatically redirect to a home page.

![9](https://user-images.githubusercontent.com/75247773/206041656-f5881f01-ed90-402c-93ba-c4f0ec8d2b3f.jpg)

If there is no a page the user is looking for then the app will inform about that and automatically redirect to a home page.

![10](https://user-images.githubusercontent.com/75247773/206041662-93ff1daf-a5c2-4ca7-87cb-4389a2e7b798.jpg)

## RWD

Responsive web design approach gives the possibility to use the app on the devices with a different screen sizes.

![11](https://user-images.githubusercontent.com/75247773/206042417-32225e6d-9f3f-4283-aadf-4dda2cc9634f.jpg)

![12](https://user-images.githubusercontent.com/75247773/206042156-093199e9-7234-442d-9bf9-01c37e3e0edb.jpg)
