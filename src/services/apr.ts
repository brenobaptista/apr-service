interface BaseAPR {
  success: boolean
  apr: number
}

interface ScoreAPR {
  lowScoreAPR?: number
  mediumScoreAPR?: number
  highScoreAPR?: number
}

const validateAPR = (apr: number | undefined) => {
  if (apr) {
    return {
      success: true,
      apr
    }
  }

  throw {
    status: 200,
    success: false,
    message: 'APR not applicable for this loan term and credit score'
  }
}

const handleAPR = (
  creditScore: number,
  { lowScoreAPR, mediumScoreAPR, highScoreAPR }: ScoreAPR
) => {
  if (creditScore >= 300 && creditScore < 600) {
    return validateAPR(lowScoreAPR)
  }

  if (creditScore >= 600 && creditScore < 700) {
    return validateAPR(mediumScoreAPR)
  }

  if (creditScore >= 700 && creditScore <= 850) {
    return validateAPR(highScoreAPR)
  }

  throw {
    status: 400,
    success: false,
    message: 'Invalid credit score'
  }
}

export const calculateBaseAPR = (loanTerm: number, creditScore: number) => {
  if (loanTerm > 0 && loanTerm <= 36) {
    return handleAPR(creditScore, {
      lowScoreAPR: 0.1275,
      mediumScoreAPR: 0.0575,
      highScoreAPR: 0.0475
    })
  }

  if (loanTerm > 36 && loanTerm <= 48) {
    return handleAPR(creditScore, {
      lowScoreAPR: 0.1325,
      mediumScoreAPR: 0.06,
      highScoreAPR: 0.05
    })
  }

  if (loanTerm > 48 && loanTerm <= 60) {
    return handleAPR(creditScore, {
      mediumScoreAPR: 0.0665,
      highScoreAPR: 0.055
    })
  }

  throw {
    status: 200,
    success: false,
    message: 'Loan term cannot be more than 60 months'
  }
}

export const addModifiers = (
  baseAPR: BaseAPR,
  vehicleYear: number,
  vehicleMileage: number
) => {
  const modifiedAPR = {
    ...baseAPR
  }

  if (vehicleYear <= 2015) {
    modifiedAPR.apr += 0.01
  }

  if (vehicleMileage > 100000) {
    modifiedAPR.apr += 0.02
  }

  return modifiedAPR
}
