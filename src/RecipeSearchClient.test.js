const RecipeSearchClient = require('./RecipeSearchClient');

const client = new RecipeSearchClient({
  appId: process.env.RECIPE_SEARCH_APP_ID,
  appKey: process.env.RECIPE_SEARCH_APP_KEY
});

/** @timeout */
it('searches for recipes', async () => {
  jest.setTimeout(30000);

  const data = await client.search({ query: 'Chicken' });

  expect(data).toMatchObject({
    q: 'Chicken'
  });
});
