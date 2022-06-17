module.exports = {
  preset: "ts-jest",

  // set the test environment to jsdom, so we have access to window, document, and other browser type-things
  testEnvironment: "jsdom",

  // include testing-library matchers
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  transform: {
    // handle js and ts modules
    "^.+\\.(js|ts)?$": "babel-jest",
    // stub files that we can't handle
    "^.+\\.(svg|s?css|less)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    // stub node_module files that we can't handle
    "^.+.(svg|s?css|less|png|jpg)$": "jest-transform-stub",
    // stub the tram-one logo (which points to an svg)
    "@tram-one/tram-logo": "jest-transform-stub",
  },
};
