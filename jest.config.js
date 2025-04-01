export default {
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // https://jestjs.io/docs/webpack#mocking-css-modules
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es)/)', // https://jaketrent.com/post/jest-unexpected-token-typescript/
  ],
};
