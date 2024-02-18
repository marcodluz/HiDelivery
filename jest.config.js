module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = {
  collectCoverageFrom: [
    "app/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your source files
    "!src/**/*.d.ts",
    // Exclude other files/folders as needed
  ],
};
