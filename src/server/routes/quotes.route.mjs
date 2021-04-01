import path from 'path'

import express from 'express'

import Quotes from '../../model/quotes.mjs'

const router = express.Router()

const data = path.resolve(path.resolve(), 'data', 'quotes.json')
const quotes = new Quotes(data).toJSON()

const random = (req, res) => {
  console.log('quotes', quotes)
  const quote = quotes[Math.floor(Math.random(quotes))]
  res.json(quote)
}

router.route('/quotes').get(random)

export default router
