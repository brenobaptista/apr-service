import { calculateBaseAPR, addModifiers } from '../../src/services/apr'

describe('APR service', () => {
  describe('calculate the base APR', () => {
    describe('for loan term up to 36 months', () => {
      test('when credit score is in range [300,600[', () => {
        const baseAPR = calculateBaseAPR(36, 450)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.1275
        })
      })

      test('when credit score is in range [600,700[', () => {
        const baseAPR = calculateBaseAPR(36, 650)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.0575
        })
      })

      test('when credit score is in range [700,850]', () => {
        const baseAPR = calculateBaseAPR(36, 750)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.0475
        })
      })
    })

    describe('for loan term up to 48 months', () => {
      test('when credit score is in range [700,850]', () => {
        const baseAPR = calculateBaseAPR(48, 700)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.05
        })
      })

      test('when credit score is in range [600,700[', () => {
        const baseAPR = calculateBaseAPR(48, 650)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.06
        })
      })

      test('when credit score is in range [300,600[', () => {
        const baseAPR = calculateBaseAPR(48, 450)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.1325
        })
      })
    })

    describe('for loan term up to 60 months', () => {
      test('when credit score is in range [700,850]', () => {
        const baseAPR = calculateBaseAPR(60, 700)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.055
        })
      })

      test('when credit score is in range [600,700[', () => {
        const baseAPR = calculateBaseAPR(60, 650)

        expect(baseAPR).toEqual({
          success: true,
          apr: 0.0665
        })
      })

      test('when credit score is in range [300,600[', () => {
        expect.assertions(1)

        try {
          calculateBaseAPR(60, 450)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message: 'APR not applicable for this loan term and credit score'
          })
        }
      })
    })

    describe('for loan term more 60 months', () => {
      test('any credit score', () => {
        expect.assertions(1)

        try {
          calculateBaseAPR(72, 850)
        } catch (error) {
          expect(error).toEqual({
            status: 200,
            success: false,
            message: 'Loan term cannot be more than 60 months'
          })
        }
      })
    })
  })

  describe('add modifiers to the base APR', () => {
    test('when the vehicle year is before 2015', () => {
      const modifiedAPR = addModifiers(
        {
          success: true,
          apr: 0.0475
        },
        2014,
        50000
      )

      expect(modifiedAPR).toEqual({
        success: true,
        apr: 0.0575
      })
    })

    test('when the vehicle mileage is over 100,000 miles', () => {
      const modifiedAPR = addModifiers(
        {
          success: true,
          apr: 0.0475
        },
        2016,
        110000
      )

      expect(modifiedAPR).toEqual({
        success: true,
        apr: 0.0675
      })
    })

    test('when the vehicle year is before 2015 and the vehicle mileage is over 100,000 miles', () => {
      const modifiedAPR = addModifiers(
        {
          success: true,
          apr: 0.0475
        },
        2010,
        200000
      )

      expect(modifiedAPR).toEqual({
        success: true,
        apr: 0.0775
      })
    })
  })
})
