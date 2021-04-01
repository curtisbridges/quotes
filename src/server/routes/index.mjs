const express = require('express')
const router = express.Router()
import quotesRoute from './quotes.route.mjs'

const defaultRoutes = [
  {
    path: '/quotes',
    route: quotesRoute,
  },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

export default router
