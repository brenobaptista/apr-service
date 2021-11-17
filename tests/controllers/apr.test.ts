import { calculate } from '../../src/controllers/apr'

interface Body {
  success: boolean
  apr: number
}

describe('APR controller', () => {
  test('example input data', () => {
    const mockRequest = {
      body: {
        loanAmount: 10000,
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

    calculate(mockRequest, mockResponse)

    expect(mockResponse.statusCode).toBe(200)
    expect(mockResponse.body).toEqual({
      success: true,
      apr: 0.0575
    })
  })

  test('invalid input data', () => {
    const mockRequest = {
      body: {
        loanAmount: 10000,
        loanTerm: 60,
        creditScore: 550,
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

    calculate(mockRequest, mockResponse)

    expect(mockResponse.statusCode).toBe(200)
    expect(mockResponse.body).toEqual({
      success: false,
      message: 'APR not applicable for this loan term and credit score'
    })
  })
})
