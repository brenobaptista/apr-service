import type { RequestHandler } from 'express'
import { validateImpossibleCases, validateRules } from '../services/validation'

class ThrowResponse {
  constructor(
    public status: number,
    public success: boolean,
    public message: string
  ) {}
}

const validate: RequestHandler = (req, res, next) => {
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
    if (error instanceof ThrowResponse) {
      const { status, success, message } = error

      res.status(status).json({
        success,
        message
      })
    }

    next(error)
  }
}

export default validate
