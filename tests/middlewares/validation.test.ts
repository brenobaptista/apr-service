import { jest } from '@jest/globals'

import validate from '../../src/middlewares/validation'

interface Body {
  success: boolean
  apr: number
}

describe('Validation middleware', () => {
  test('if impossible cases are blocked', () => {
    const mockRequest = {
      body: {
        loanAmount: 0,
        loanTerm: 36,
        creditScore: 700,
        vehicleYear: 2014,
        vehicleMileage: 50000
      }
    }

    const mockResponse = {
      statusCode: 0,
      body: {},
      status: (statusCode: number) => {
        mockResponse.statusCode = statusCode

        return {
          json: (body: Body) => {
            mockResponse.body = body
          }
        }
      }
    }

    const next = jest.fn()

    validate(mockRequest, mockResponse, next)

    expect(next).not.toBeCalled()
    expect(mockResponse.statusCode).toBe(400)
    expect(mockResponse.body).toEqual({
      success: false,
      message: 'Loan amount cannot be less than or equal to 0 dollars'
    })
  })

  test('if broken rules are blocked', () => {
    const mockRequest = {
      body: {
        loanAmount: 4500,
        loanTerm: 36,
        creditScore: 700,
        vehicleYear: 2014,
        vehicleMileage: 50000
      }
    }

    const mockResponse = {
      statusCode: 0,
      body: {},
      status: (statusCode: number) => {
        mockResponse.statusCode = statusCode

        return {
          json: (body: Body) => {
            mockResponse.body = body
          }
        }
      }
    }

    const next = jest.fn()

    validate(mockRequest, mockResponse, next)

    expect(next).not.toBeCalled()
    expect(mockResponse.statusCode).toBe(200)
    expect(mockResponse.body).toEqual({
      success: false,
      message: 'The minimum loan amount for loans up to 36 months is $5,000'
    })
  })

  test('if valid input passes', () => {
    const mockRequest = {
      body: {
        loanAmount: 10000,
        loanTerm: 36,
        creditScore: 700,
        vehicleYear: 2014,
        vehicleMileage: 50000
      }
    }

    const mockResponse = jest.fn()
    const next = jest.fn()

    validate(mockRequest, mockResponse, next)

    expect(next).toBeCalled()
  })
})
