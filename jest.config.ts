/** @type {import('jest').Config} */
module.exports = {
  // ...
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json", // path to your custom tsconfig
      },
    ],
  },
  // ...
};
