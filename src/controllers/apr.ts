import type { RequestHandler } from 'express'
import { calculateBaseAPR, addModifiers } from '../services/apr'

class ThrowResponse {
  constructor(
    public status: number,
    public success: boolean,
    public message: string
  ) {}
}

export const calculate: RequestHandler = (req, res, next) => {
  const { loanTerm, creditScore, vehicleYear, vehicleMileage } = req.body

  try {
    const baseAPR = calculateBaseAPR(loanTerm, creditScore)

    const modifiedAPR = addModifiers(baseAPR, vehicleYear, vehicleMileage)

    res.status(200).json(modifiedAPR)
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
