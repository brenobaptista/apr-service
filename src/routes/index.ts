import { Router } from 'express'

import apr from './apr'

const routes = Router()

apr(routes)

export default routes
