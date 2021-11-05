const express = require('express')

const loaders = require('./loaders')
const routes = require('./routes')

const app = express()

loaders(app)

app.use(routes)

app.listen(process.env.PORT || 8080)
