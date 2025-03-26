export default {
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es)/)', // https://jaketrent.com/post/jest-unexpected-token-typescript/
  ],
};
