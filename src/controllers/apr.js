import { calculateAPR } from '../services/apr.js'

export const calculate = (req, res) => {
  const { loanTerm, creditScore } = req.body

  try {
    const response = calculateAPR(loanTerm, creditScore)

    res.status(200).json(response)
  } catch (error) {
    const { status, success, message } = error

    res.status(status).json({
      success,
      message
    })
  }
}
