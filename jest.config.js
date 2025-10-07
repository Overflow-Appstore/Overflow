module.exports = {
  preset: 'jest-expo/ios',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/backend/functions/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
