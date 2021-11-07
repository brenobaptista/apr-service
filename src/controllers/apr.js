import { calculateAPR, addModifiers } from '../services/apr.js'

export const calculate = (req, res) => {
  const { loanTerm, creditScore, vehicleYear, vehicleMileage } = req.body

  try {
    const baseAPR = calculateAPR(loanTerm, creditScore)

    const modifiedAPR = addModifiers(baseAPR, vehicleYear, vehicleMileage)

    res.status(200).json(modifiedAPR)
  } catch (error) {
    const { status, success, message } = error

    res.status(status).json({
      success,
      message
    })
  }
}
