const handleAPR = (creditScore, { lowAPR, mediumAPR, highAPR }) => {
  if (300 <= creditScore < 600) {
    return {
      success: true,
      apr: lowAPR
    }
  }

  if (600 <= creditScore < 700) {
    return {
      success: true,
      apr: mediumAPR
    }
  }

  if (700 <= creditScore <= 850) {
    return {
      success: true,
      apr: highAPR
    }
  }
}

export const calculateAPR = (loanTerm, creditScore) => {
  if (0 < loanTerm <= 36) {
    return handleAPR(creditScore, {
      lowAPR: 0.1275,
      mediumAPR: 0.0575,
      highAPR: 0.0475
    })
  }

  if (36 < loanTerm <= 48) {
    return handleAPR(creditScore, {
      lowAPR: 0.1325,
      mediumAPR: 0.06,
      highAPR: 0.05
    })
  }

  if (48 < loanTerm <= 60) {
  }
}

export const validateParameters = (loanTerm, creditScore) => {
  if (loanTerm <= 0) {
    return {
      success: false,
      message: 'Loan term cannot be less than or equal to 0 months'
    }
  }

  if (loanTerm > 60) {
    return {
      success: false,
      message: 'Loan term cannot be more than 60 months'
    }
  }

  if (creditScore < 300) {
    return {
      success: false,
      message: 'The lowest credit score possible is 300'
    }
  }

  if (creditScore > 850) {
    return {
      success: false,
      message: 'The highest credit score possible is 850'
    }
  }

  return {
    success: true
  }
}
