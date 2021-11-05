const dotenv = require('dotenv')

module.exports = () => {
  const configOutput = dotenv.config()

  if (configOutput.error) {
    throw new Error("Couldn't find a .env file")
  }
}
