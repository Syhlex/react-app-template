export default {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es)/)', // https://jaketrent.com/post/jest-unexpected-token-typescript/
  ],
};
