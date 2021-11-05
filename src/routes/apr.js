import { calculate } from '../controllers/apr.js'
import validate from '../middlewares/validation.js'

const apr = routes => {
  routes.post('/apr', validate, calculate)
}

export default apr
