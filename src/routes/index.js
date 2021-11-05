const { Router } = require('express')

const apr = require('./apr')

const routes = Router()

apr(routes)

module.exports = routes
