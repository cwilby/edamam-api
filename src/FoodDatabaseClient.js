const EdamamClient = require('./EdamamClient');

module.exports = class FoodDatabaseClient extends EdamamClient {
  constructor({ appKey, appId }) {
    super({ appKey, appId });
  }

  search({ upc, query, nutritionType, health, calories, page, category, categoryLabel } = {}) {
    return this.get('food-database/parser', {
      params: {
        UPC: upc,
        ingr: query,
        'nutrition-type': nutritionType,
        health,
        calories,
        page,
        category,
        categoryLabel
      }
    });
  }

  getNutrients({ ingredients, servings }) {
    return this.post('food-database/nutrients', { yield: servings, ingredients });
  }

  autocomplete({ query, limit }) {
    return this.get('*auto-complete', {
      params: {
        q: query,
        limit
      }
    });
  }
};
