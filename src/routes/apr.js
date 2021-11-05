const apr = require('../controllers/apr')

module.exports = routes => {
  routes.post('/apr', apr.calculate)
}
