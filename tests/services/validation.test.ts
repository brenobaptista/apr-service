import {
  validateImpossibleCases,
  validateRules
} from '../../src/services/validation'

describe('Validation service', () => {
  describe('validates impossible cases', () => {
    test('should validate the loan amount', () => {
      expect.assertions(1)

      try {
        validateImpossibleCases(0, 36, 700, 2014, 50000)
      } catch (error) {
        expect(error).toEqual({
          status: 400,
          success: false,
          message: 'Loan amount cannot be less than or equal to 0 dollars'
        })
      }
    })

    test('should validate the loan term', () => {
      expect.assertions(1)

      try {
        validateImpossibleCases(10000, 0, 700, 2014, 50000)
      } catch (error) {
        expect(error).toEqual({
          status: 400,
          success: false,
          message: 'Loan term cannot be less than or equal to 0 months'
        })
      }
    })

    describe('should validate the credit score', () => {
      test('when credit score is below 300', () => {
        expect.assertions(1)

        try {
          validateImpossibleCases(10000, 36, 250, 2014, 50000)
        } catch (error) {
          expect(error).toEqual({
            status: 400,
            success: false,
            message: 'The lowest credit score possible is 300'
          })
        }
      })

      test('when credit score is above 850', () => {
        expect.assertions(1)

        try {
          validateImpossibleCases(10000, 36, 900, 2014, 50000)
        } catch (error) {
          expect(error).toEqual({
            status: 400,
            success: false,
            message: 'The highest credit score possible is 850'
          })
        }
      })
    })

    describe('should validate the vehicle year', () => {
      const currentYear = new Date().getFullYear()

      test(`when vehicle year is after ${currentYear + 1}`, () => {
        expect.assertions(1)

        try {
          validateImpossibleCases(10000, 36, 700, currentYear + 2, 50000)
        } catch (error) {
          expect(error).toEqual({
            status: 400,
            success: false,
            message: `Vehicle year cannot be after ${currentYear + 1}`
          })
        }
      })

      test('when vehicle year is before 1900', () => {
        expect.assertions(1)

        try {
          validateImpossibleCases(10000, 36, 700, 1899, 50000)
        } catch (error) {
          expect(error).toEqual({
            status: 400,
            success: false,
            message: 'Vehicle year cannot be before 1900'
          })
        }
      })
    })

    test('should validate the vehicle mileage', () => {
      expect.assertions(1)

      try {
        validateImpossibleCases(10000, 36, 700, 2014, 0)
      } catch (error) {
        expect(error).toEqual({
          status: 400,
          success: false,
          message: 'Vehicle mileage cannot be less than or equal to 0 miles'
        })
      }
    })
  })

  describe('validates rules', () => {
    describe('should validate the loan term', () => {
      test('for loan term up to 36 months', () => {
        expect.assertions(1)

        try {
          validateRules(4500, 36, 700)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The minimum loan amount for loans up to 36 months is $5,000'
          })
        }
      })

      test('for loan term up to 48 months', () => {
        expect.assertions(1)

        try {
          validateRules(9500, 48, 700)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The minimum loan amount for loans up to 48 months is $10,000'
          })
        }
      })

      test('for loan term up to 60 months', () => {
        expect.assertions(1)

        try {
          validateRules(14500, 60, 700)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The minimum loan amount for loans up to 60 months is $15,000'
          })
        }
      })
    })

    describe('should validate the credit score', () => {
      test('when credit score is in range [300,600[', () => {
        expect.assertions(1)

        try {
          validateRules(55000, 36, 450)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The maximum loan amount for credit score below 600 is $50,000'
          })
        }
      })

      test('when credit score is in range [600,700[', () => {
        expect.assertions(1)

        try {
          validateRules(80000, 36, 650)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The maximum loan amount for credit score between 600 and 699 is $75,000'
          })
        }
      })

      test('when credit score is in range [700,850]', () => {
        expect.assertions(1)

        try {
          validateRules(105000, 36, 750)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message:
              'The maximum loan amount for credit score equal to 700 or above is $100,000'
          })
        }
      })
    })
  })
})
