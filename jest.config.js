export default {
  clearMocks: true,
  collectCoverageFrom: ['src/{controllers,middlewares,services}/*.{js,ts}'],
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}
