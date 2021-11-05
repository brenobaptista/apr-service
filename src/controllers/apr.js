import { calculateAPR, validateParameters } from '../services/apr.js'

export const calculate = (req, res) => {
  const { loanAmount, loanTerm, creditScore, vehicleYear, vehicleMileage } =
    req.body

  const validation = validateParameters(loanTerm, creditScore)

  if (!validation.success) {
    res.status(400).json(validation)
  }

  const aprResponse = calculateAPR(loanTerm, creditScore)

  res.status(200).json(aprResponse)
}
