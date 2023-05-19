module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: ['default', 'jest-sonar']
  };
  