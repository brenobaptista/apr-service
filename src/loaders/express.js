const express = require('express')
const cors = require('cors')
const compression = require('compression')

module.exports = app => {
  app.use(express.json())

  app.use(express.urlencoded({ extended: true }))

  app.use(cors())

  app.use(compression())

  app.disable('x-powered-by')
}
