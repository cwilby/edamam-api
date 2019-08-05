const NutritionAnalysisClient = require('./NutritionAnalysisClient');

const client = new NutritionAnalysisClient({
  appId: process.env.NUTRITION_ANALYSIS_APP_ID,
  appKey: process.env.NUTRITION_ANALYSIS_APP_KEY
});

it('gets recipe analysis', async () => {
  const data = await client.analyzeRecipe({
    title: 'Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing',
    yield: 'About 15 servings',
    ingr: [
      '1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)',
      '7 cloves garlic, minced',
      '1 tablespoon caraway seeds, crushed',
      '4 teaspoons salt',
      'Freshly ground pepper to taste',
      '1 teaspoon olive oil',
      '1 medium onion, peeled and chopped',
      '3 cups sourdough rye bread, cut into 1/2-inch cubes',
      '1 1/4 cups coarsely chopped pitted prunes',
      '1 1/4 cups coarsely chopped dried apricots',
      '1 large tart apple, peeled, cored and cut into 1/2-inch cubes',
      '2 teaspoons chopped fresh rosemary',
      '1 egg, lightly beaten',
      '1 cup chicken broth, homemade or low-sodium canned'
    ]
  });

  expect(data).toMatchObject({
    uri: expect.any(String)
  });
});

it('gets nutrition data', async () => {
  const data = await client.getNutritionData({ ingredient: 'Apple' });

  expect(data).toMatchObject({
    uri: expect.any(String)
  });
});
