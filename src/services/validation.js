const validateLoanAmount = loanAmount => {
  if (loanAmount <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Loan amount cannot be less than or equal to 0 dollars'
    }
  }
}

const validateLoanTerm = loanTerm => {
  if (loanTerm <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Loan term cannot be less than or equal to 0 months'
    }
  }
}

const validateCreditScore = creditScore => {
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

const validateVehicleYear = vehicleYear => {
  const currentYear = new Date().getFullYear()

  if (vehicleYear > currentYear + 1) {
    throw {
      status: 400,
      success: false,
      message: `Vehicle year cannot be greater than ${currentYear + 1}`
    }
  }

  if (vehicleYear < 1900) {
    throw {
      status: 400,
      success: false,
      message: 'Vehicle year cannot be lesser than 1900'
    }
  }
}

const validateVehicleMileage = vehicleMileage => {
  if (vehicleMileage <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Vehicle mileage cannot be less than or equal to 0 dollars'
    }
  }
}

export const validateImpossibleCases = (
  loanAmount,
  loanTerm,
  creditScore,
  vehicleYear,
  vehicleMileage
) => {
  validateLoanAmount(loanAmount)
  validateLoanTerm(loanTerm)
  validateCreditScore(creditScore)
  validateVehicleYear(vehicleYear)
  validateVehicleMileage(vehicleMileage)
}

const validateLoanTermRules = (loanAmount, loanTerm) => {
  if (loanTerm <= 36 && loanAmount <= 5000) {
    throw {
      status: 200,
      success: false,
      message: 'The minimum loan amount for loans up to 36 months is $5,000'
    }
  }

  if (loanTerm > 36 && loanTerm <= 48 && loanAmount <= 10000) {
    throw {
      status: 200,
      success: false,
      message: 'The minimum loan amount for loans up to 48 months is $10,000'
    }
  }

  if (loanTerm > 48 && loanTerm <= 60 && loanAmount <= 15000) {
    throw {
      status: 200,
      success: false,
      message: 'The minimum loan amount for loans up to 60 months is $15,000'
    }
  }
}

const validateCreditScoreRules = (loanAmount, creditScore) => {
  if (creditScore >= 700 && loanAmount >= 100000) {
    throw {
      status: 200,
      success: false,
      message:
        'The maximum loan amount for credit score equal to 700 or above is $100,000'
    }
  }

  if (creditScore >= 600 && creditScore < 700 && loanAmount >= 75000) {
    throw {
      status: 200,
      success: false,
      message:
        'The maximum loan amount for credit score between 600 and 699 is $75,000'
    }
  }

  if (creditScore <= 600 && loanAmount >= 50000) {
    throw {
      status: 200,
      success: false,
      message: 'The maximum loan amount for credit score below 600 is $50,000'
    }
  }
}

export const validateRules = (loanAmount, loanTerm, creditScore) => {
  validateLoanTermRules(loanAmount, loanTerm)
  validateCreditScoreRules(loanAmount, creditScore)
}
