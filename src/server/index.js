import express from 'express'
import router from './routes/quotes.route.mjs'

const app = express()

app.use('/', router)

app.listen(3000)
