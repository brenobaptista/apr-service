const express = require('express')
const cors = require('cors')
const compression = require('compression')
const routes = require('./api')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(compression())

app.disable('x-powered-by')

app.use(routes)

app.listen(3333)
