const dotenvLoader = require('./dotenv')
const expressLoader = require('./express')

module.exports = app => {
  dotenvLoader()
  expressLoader(app)
}
