const EdamamClient = require('./EdamamClient');

module.exports = class RecipeSearchClient extends EdamamClient {
  constructor({ appKey, appId, enableEncoding }) {
    super({ appKey, appId });
  }

  search({
    query = null,
    recipeId = null,
    limit = {
      from: 0,
      to: 10
    },
    maxIngredients = null,
    mealType = null,
    calories = null,
    time = null,
    dietLabels = [],
    healthLabels = [],
    cuisineTypeLabels = [],
    dishTypeLabels = [],
    excludedIngredients = []
  }) {
    const params = [
      ['q', query],
      ['r', recipeId],
      ['from', limit.from],
      ['to', limit.to],
      ['ingr', maxIngredients],
      ['mealType', mealType],
      ['calories', calories],
      ['time', time],
      ...dietLabels.map(dl => ['diet', dl]),
      ...healthLabels.map(hl => ['health', hl]),
      ...cuisineTypeLabels.map(ctl => ['cuisineType', ctl]),
      ...dishTypeLabels.map(dtl => ['dishType', dtl]),
      ...excludedIngredients.map(ei => ['excluded', ei])
    ]
      .map(([key, value]) => [null, undefined].includes(value) ? null : `${key}=${encodeURIComponent(value)}`)
      .filter(x => x)
      .join('&');

    return this.get(`*search?${params}`, {
      headers: {
        'Accept-Encoding': 'gzip'
      }
    });
  }
};
