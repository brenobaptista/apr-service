import { calculate } from '../controllers/apr.js'

const aprRoutes = routes => {
  routes.post('/apr', calculate)
}

export default aprRoutes
