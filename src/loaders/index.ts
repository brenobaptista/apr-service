import { Express } from 'express'
import dotenvLoader from './dotenv'
import expressLoader from './express'

const loaders = (app: Express) => {
  dotenvLoader()
  expressLoader(app)
}

export default loaders
