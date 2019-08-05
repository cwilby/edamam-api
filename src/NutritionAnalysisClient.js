const EdamamClient = require('./EdamamClient');

module.exports = class NutritionAnalysisClient extends EdamamClient {
  constructor({ appKey, appId }) {
    super({ appKey, appId });
  }

  analyzeRecipe(recipe, { force = false } = {}) {
    return this.post('nutrition-details', recipe, {
      params: {
        force
      }
    });
  }

  getNutritionData({ ingredient, nutritionType = null } = {}) {
    return this.get('nutrition-data', {
      params: {
        'nutrition-type': nutritionType,
        ingr: encodeURIComponent(ingredient)
      }
    });
  }
};
