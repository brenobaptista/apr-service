import invalidateImpossibleCases from '../services/validation.js'

const validate = (req, res, next) => {
  const { loanAmount, loanTerm, creditScore, vehicleYear, vehicleMileage } =
    req.body

  try {
    invalidateImpossibleCases(loanTerm, creditScore)

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
