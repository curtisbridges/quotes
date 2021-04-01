const Quotes = require('../model/quotes')

test('Reads contents of an existing file', () => {
  const contents = new Quotes('./data/quotes.json').contents
  expect(contents).toBeDefined()
})

test(`Doesn't accept empty constructor`, () => {
  const quotes = new Quotes()
  expect(quotes.contents).toBeUndefined()
})
