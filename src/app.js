import express from 'express'

import loaders from './loaders/index.js'
import routes from './routes/index.js'

const app = express()

loaders(app)

app.use(routes)

app.listen(process.env.PORT || 8080)
