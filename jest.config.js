module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: ['default', 'jest-sonar'],
    
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };
  