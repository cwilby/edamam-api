# edamam-api

[![CircleCI](https://circleci.com/gh/cwilby/edamam-api.svg?style=svg)](https://circleci.com/gh/cwilby/edamam-api)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/360b9f88cbe549e2b7498ee6f6379aed)](https://www.codacy.com/app/cwilby/edamam-node?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cwilby/edamam-node&amp;utm_campaign=Badge_Grade)

Edamam-api is a helper library for the [Edamam](https://edamam.com) nutritional API.

Full documentation for Edamam's services can be found [here](https://developer.edamam.com/) under the Documentation tab.

## Installation

`npm install --save edamam-api`

## Usage

- [Recipe Search](#recipe-search)
- [Food Database](#food-database)
- [Nutrition Analysis](#nutrition-analysis)
- [Measures](#measures)

### Recipe Search

**Example**

```js
const { RecipeSearchClient } = require('edamam-api');

const client = new RecipeSearchClient({
  appId: '<Your Edamam Recipe Search App Id>',
  appKey: '<Your Edamam Recipe Search App Key>'
});

const results = await client.search({ query: 'Bread' });
```

**Methods**

* Search: `client.search({ query })`

### Food Database

**Example**

```js
const { FoodDatabaseClient } = require('edamam-api');

const client = new FoodDatabaseClient({
  appId: '<Your Edamam Food Database App Id>',
  appKey: '<Your Edamam Food Database App Key>'
});

const foods = client.search({ query: 'Flour' });
```

**Methods**

* Search: `client.search({ query })`
* Get Nutrients: `client.getNutrients({ ingredients: [{ quantity, measureURI, foodId }]})`
* Autocomplete: `client.autocomplete({ query, limit })`

### Nutrition Analysis

**Example**

```js
const { NutritionAnalysisClient } = require('edamam-api');

(async () => {

  const client = new NutritionAnalysisClient({
    appId: '<Your Edamam Nutrition Analysis App Id>',
    appKey: '<Your Edamam Nutrition Analysis App Key>'
  });

  const results = await client.search({ query: 'Chicken' });

})();
```

**Methods**

* Analyze Recipe: `client.analyzeRecipe({ recipe })`
* Get Nutrition Data: `client.getNutritionData({ ingredient })`

### Measures

**Example**

```js
const { FoodDatabaseClient, Measures } = require('edamam-api');

const client = new FoodDatabaseClient({
  appId: '<Your Edamam Food Database App Id>',
  appKey: '<Your Edamam Food Database App Key>'
});

const nutrients = await client.getNutrients({
  ingredients: [{
    quantity: 1,
    measureURI: Measures['kilogram'],
    foodId: 'food_ashlcg6b4ansska87l39xb0dnupz' // edamam id for an apple
  }]
});
```
