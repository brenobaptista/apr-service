# APR Service

> APR (annual percentage rate) service for vehicle loans

## Getting Started

### Essencial scripts

```sh
1. Generate the .env file:
$ cp .env.example .env

2. Install dependencies:
$ yarn

3. Build and start the API:
$ yarn start
```

### Development scripts

```sh
Start the API with automatic restarting:
$ yarn dev

Run tests:
$ yarn test

Check tests coverage:
$ yarn test:coverage

Lint files:
$ yarn lint

Prettier files:
$ yarn prettier

Update dependencies:
$ yarn dependencies
```

The script `prepare` is required by Husky to automatically have Git hooks enabled after install. You don't need to run it manually.

## Specification

This a service that returns the annual percentage rate (APR) for a vehicle loan. The input for the endpoint is:

- The loan amount
- The loan term (in months)
- The person credit score
- The vehicle year
- The vehicle mileage

The annual percentage rate (APR) is calculated using the base rate table below:

| Loan Term       | Credit Score >= 700 | Credit Score between 600 and 699 | Credit Score < 600 |
| --------------- | ------------------- | -------------------------------- | ------------------ |
| Up to 36 months | 4.75%               | 5.75%                            | 12.75%             |
| Up to 48 months | 5.00%               | 6.00%                            | 13.25%             |
| Up to 60 months | 5.50%               | 6.65%                            | N/A                |

And the following rules:

1. The minimum loan amount for loans up to 36 months is $ 5,000
2. The minimum loan amount for loans up to 48 months is $ 10,000
3. The minimum loan amount for loans up to 60 months is $ 15,000
4. The maximum loan amount for credit score equal to 700 or above is $ 100,000
5. The maximum loan amount for credit score between 600 and 699 is $ 75,000
6. The maximum loan amount for credit score below 600 is $ 50,000
7. If the vehicle year is before 2015, the base rate should be increased in 1.00%
8. If the vehicle mileage is over 100,000, the base rate should be increased in 2.00%

## Author

| [![brenobaptista](https://avatars1.githubusercontent.com/u/47641641?s=120&v=4)](https://github.com/brenobaptista) |
| ----------------------------------------------------------------------------------------------------------------- |
| [Breno Baptista](https://github.com/brenobaptista)                                                                |

## License

This project is licensed under the [MIT License](/LICENSE)
