const validateAPR = score => {
  if (score) {
    return {
      success: true,
      apr: score
    }
  }

  throw {
    status: 200,
    success: false,
    message: 'APR not applicable for this loan term and credit score'
  }
}

const handleAPR = (creditScore, { lowScore, mediumScore, highScore }) => {
  if (creditScore >= 300 && creditScore < 600) {
    return validateAPR(lowScore)
  }

  if (creditScore >= 600 && creditScore < 700) {
    return validateAPR(mediumScore)
  }

  if (creditScore >= 700 && creditScore <= 850) {
    return validateAPR(highScore)
  }
}

export const calculateAPR = (loanTerm, creditScore) => {
  if (loanTerm > 0 && loanTerm <= 36) {
    return handleAPR(creditScore, {
      lowScore: 0.1275,
      mediumScore: 0.0575,
      highScore: 0.0475
    })
  }

  if (loanTerm > 36 && loanTerm <= 48) {
    return handleAPR(creditScore, {
      lowScore: 0.1325,
      mediumScore: 0.06,
      highScore: 0.05
    })
  }

  if (loanTerm > 48 && loanTerm <= 60) {
    return handleAPR(creditScore, {
      mediumScore: 0.0665,
      highScore: 0.055
    })
  }
}

export const validateParameters = (loanTerm, creditScore) => {
  if (loanTerm <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Loan term cannot be less than or equal to 0 months'
    }
  }

  if (loanTerm > 60) {
    throw {
      status: 400,
      success: false,
      message: 'Loan term cannot be more than 60 months'
    }
  }

  if (creditScore < 300) {
    throw {
      status: 400,
      success: false,
      message: 'The lowest credit score possible is 300'
    }
  }

  if (creditScore > 850) {
    throw {
      status: 400,
      success: false,
      message: 'The highest credit score possible is 850'
    }
  }
}
