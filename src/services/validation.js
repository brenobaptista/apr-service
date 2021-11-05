const invalidateLoanAmount = loanAmount => {
  if (loanAmount <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Loan amount cannot be less than or equal to 0 dollars'
    }
  }
}

const invalidateLoanTerm = loanTerm => {
  if (loanTerm <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Loan term cannot be less than or equal to 0 months'
    }
  }
}

const invalidateCreditScore = creditScore => {
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

const invalidateVehicleYear = vehicleYear => {
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

const invalidateVehicleMileage = vehicleMileage => {
  if (vehicleMileage <= 0) {
    throw {
      status: 400,
      success: false,
      message: 'Vehicle mileage cannot be less than or equal to 0 dollars'
    }
  }
}

const invalidateImpossibleCases = (
  loanAmount,
  loanTerm,
  creditScore,
  vehicleYear,
  vehicleMileage
) => {
  invalidateLoanAmount(loanAmount)
  invalidateLoanTerm(loanTerm)
  invalidateCreditScore(creditScore)
  invalidateVehicleYear(vehicleYear)
  invalidateVehicleMileage(vehicleMileage)
}

export default invalidateImpossibleCases
