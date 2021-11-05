import { calculateAPR, validateParameters } from '../services/apr.js'

export const calculate = (req, res) => {
  const { loanAmount, loanTerm, creditScore, vehicleYear, vehicleMileage } =
    req.body

  try {
    validateParameters(loanTerm, creditScore)

    const aprResponse = calculateAPR(loanTerm, creditScore)

    res.status(200).json(aprResponse)
  } catch (error) {
    const { status, success, message } = error

    res.status(status).json({
      success,
      message
    })
  }
}
