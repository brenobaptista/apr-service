const express = require('express')
const routes = require('./api')
const loaders = require('./loaders')

const app = express()

loaders(app)

app.use(routes)

app.listen(process.env.PORT || 8080)
