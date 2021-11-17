import { validateImpossibleCases, validateRules } from '../services/validation'

const validate = (req, res, next) => {
  const { loanAmount, loanTerm, creditScore, vehicleYear, vehicleMileage } =
    req.body

  try {
    validateImpossibleCases(
      loanAmount,
      loanTerm,
      creditScore,
      vehicleYear,
      vehicleMileage
    )

    validateRules(loanAmount, loanTerm, creditScore)

    return next()
  } catch (error) {
    const { status, success, message } = error

    res.status(status).json({
      success,
      message
    })
  }
}

export default validate
