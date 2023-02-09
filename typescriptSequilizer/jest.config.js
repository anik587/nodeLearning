module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  globalSetup: './tests/unit/setup/setup.js',
  globalTeardown: './tests/unit/setup/teardown.js',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
