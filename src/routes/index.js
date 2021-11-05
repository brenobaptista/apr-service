import { Router } from 'express'

import apr from './apr.js'

const routes = Router()

apr(routes)

export default routes
