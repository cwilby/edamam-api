const EdamamClient = require('./EdamamClient');

module.exports = class RecipeSearchClient extends EdamamClient {
  constructor({ appKey, appId, enableEncoding }) {
    super({ appKey, appId });
  }

  search({
    query,
    recipeId,
    limit = {
      from: 0,
      to: 10
    },
    maxIngredients,
    dietLabel,
    healthLabel,
    cuisineType,
    mealType,
    dishType,
    calories,
    time,
    excluded
  }) {
    return this.get('*search', {
      headers: {
        'Accept-Encoding': 'gzip'
      },
      params: {
        q: query,
        r: recipeId,
        from: limit.from,
        to: limit.to,
        ingr: maxIngredients,
        diet: dietLabel,
        health: healthLabel,
        cuisineType,
        mealType,
        dishType,
        calories,
        time,
        excluded
      }
    });
  }
};
