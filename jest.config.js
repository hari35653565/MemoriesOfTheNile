module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    reporters: ['default', 'jest-sonar'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!(three/examples/jsm/controls/TrackballControls))'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
  };
  