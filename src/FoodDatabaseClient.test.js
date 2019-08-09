const FoodDatabaseClient = require('./FoodDatabaseClient');
const Measures = require('./Measures');

const client = new FoodDatabaseClient({
  appId: process.env.FOOD_DATABASE_APP_ID,
  appKey: process.env.FOOD_DATABASE_APP_KEY
});

it('should search for food', async () => {
  jest.setTimeout(30000);

  const data = await client.search({ query: 'Apple' });

  expect(data).toMatchObject({
    text: 'Apple'
  });
});

it('should get nutrients for food', async () => {
  jest.setTimeout(30000);

  const data = await client.getNutrients({
    ingredients: [{
      quantity: 1,
      measureURI: Measures['kilogram'],
      foodId: 'food_ashlcg6b4ansska87l39xb0dnupz'
    }]
  });

  expect(data).toMatchObject({
    uri: expect.any(String)
  });
});

it('should get autocomplete suggestions', async () => {
  jest.setTimeout(30000);

  const data = await client.autocomplete({ query: 'Apple', limit: 10 });

  expect(data).toBeInstanceOf(Array);
});
