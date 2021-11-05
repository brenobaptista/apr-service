import dotenvLoader from './dotenv.js'
import expressLoader from './express.js'

const loaders = app => {
  dotenvLoader()
  expressLoader(app)
}

export default loaders
