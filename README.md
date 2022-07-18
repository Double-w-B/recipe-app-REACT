# :green_salad: Foodie Mood

## Table of contents 

* [Newsletter](#newsletter)
* [Search filters](#search-filters)
* [Search results](#search-results)
* [Recipe](#recipe)
* [Saved recipes](#saved-recipes)
* [Errors](#errors)
* [RWD](#rwd)


## General info

An app with a recipe search feature and over the 60 diet and health filters to use for any popular diet or major health condition.
User gets over 2.3 million recipes in English with the most accurate automated nutrition analysis. Detailed nutrition breakdown of each recipe with 25+ nutrients and appropriateness for all major diets. All that data comes from the Recipe Search API (https://developer.edamam.com/edamam-recipe-api). 

The main idea of the app is to find a recipe according the preferences, to check out the ingredients of a dish and to visit the web page of full recipe or to save the recipes to the localStorage for further purposes.

Technology: <HTML + CSS + React.js + styled-components + RWD >

![img-1](https://user-images.githubusercontent.com/105418561/179506640-111d312f-1273-4972-bf0f-76dff9f21837.jpg)


## Newsletter
In the beginning User will be asked to share an his/her email address to sign up for a newsletter. The data will be saved to the localStorage. Currently that's only imitation of a service promotion to create an individual touch point with newsletter subscriber.

![img-10](https://user-images.githubusercontent.com/105418561/179506689-9e177f31-680e-4f2a-bb33-330975d68c85.jpg)

## Search filters
There is a possibility to narrow down the search query by selecting preferences among over the 60 diet and health filters.

![img-3](https://user-images.githubusercontent.com/105418561/179507007-d346306f-77e2-4ca9-a7b1-01c87423af83.jpg)

## Search results
The User gets the amount of recipes which are available in a database according to the query and selected filters.

![img-4](https://user-images.githubusercontent.com/105418561/179507215-1581bfca-58ed-4b0e-9bdc-c005660edd33.jpg)

## Recipe
Each recipe includes an image, detailed information, link to the full recipe, nutritients and ingredients of a dish. To save the recipe to the localStorage, User has to click the star in a top right corner of the recipe.

![img-5](https://user-images.githubusercontent.com/105418561/179507394-8fd9a7a3-452e-4bcc-a410-1fdee0731634.jpg)

![img-6](https://user-images.githubusercontent.com/105418561/179507489-089f0abe-0bc8-400f-a362-6c115cc4fce9.jpg)

## Saved recipes
All saved food recipes are stored in the localStorage. To see saved recipes the User has to click a star in a right bottom corner or a left top corner depends on the screen resolution of the device.

![img-7](https://user-images.githubusercontent.com/105418561/179508374-31ebec39-898e-4fb2-b244-096153fd9dae.jpg)

If the localStorage is empty, then the User will see that information during visiting saved food recipes storage.

![img-12](https://user-images.githubusercontent.com/105418561/179511863-e1dd0556-96ef-4265-8fae-01daadc31d53.jpg)

## Errors

If a key word was passed with a mistake or there is no such recipe or ingredient in an API data, then the app will show suitable information and automatically redirect to a home page.

![img-11](https://user-images.githubusercontent.com/105418561/179514309-9de86242-f1ce-448d-a63f-eea82a97143a.jpg)

If there is no a page the User is looking for then the app will inform about that and automatically redirect to a home page.

![img-13](https://user-images.githubusercontent.com/105418561/179514965-6f0bd423-8134-49cc-8e58-e63b80a14440.jpg)

## RWD
Responsive web design approach gives the possibility to use the app on the devices with a different screen sizes.

![img-8](https://user-images.githubusercontent.com/105418561/179508628-91454337-7963-4a9a-ac17-e90a66f7bbd6.jpg)

![img-9](https://user-images.githubusercontent.com/105418561/179508623-2e04987d-e08f-4cc7-b515-e69955f627bd.jpg)