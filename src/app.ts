import express from 'express'

import loaders from './loaders'
import routes from './routes'

const app = express()

loaders(app)

app.use(routes)

app.listen(process.env.PORT)
