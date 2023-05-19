module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: ['default', 'jest-sonar']
  };
  