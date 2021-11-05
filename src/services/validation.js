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

const invalidateImpossibleCases = (loanTerm, creditScore) => {
  invalidateLoanTerm(loanTerm)
  invalidateCreditScore(creditScore)
}

export default invalidateImpossibleCases
