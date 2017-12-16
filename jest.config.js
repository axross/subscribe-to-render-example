module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['raf/polyfill', './testSetup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest/preprocessor.js',
  },
  testRegex: 'test\\.(tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
