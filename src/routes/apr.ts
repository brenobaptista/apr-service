import type { Router } from 'express'
import { calculate } from '../controllers/apr'
import validate from '../middlewares/validation'

const apr = (routes: Router) => {
  routes.post('/apr', validate, calculate)
}

export default apr
