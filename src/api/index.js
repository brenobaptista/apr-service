const { Router } = require('express')
const apr = require('./routes/apr')

module.exports = () => {
  const app = Router()

  apr(app)

  return app
}
