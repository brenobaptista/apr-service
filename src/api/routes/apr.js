const { Router } = require('express')
const apr = require('../../services/apr')

const route = Router()

route.post('/apr', (req, res) => {
  const { loanAmount, loanTerm, creditScore, vehicleYear, vehicleMileage } =
    req.body

  const validation = apr.validateParameters(loanTerm, creditScore)

  if (!validation.success) {
    res.status(400).json(validation)
  }

  const aprResponse = apr.calculateAPR(loanTerm, creditScore)

  res.status(200).json(aprResponse)
})

module.exports = route
