import dotenv from 'dotenv'

const dotenvLoader = () => {
  const configOutput = dotenv.config()

  if (configOutput.error) {
    throw new Error("Couldn't find a .env file")
  }
}

export default dotenvLoader
