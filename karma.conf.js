var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js*',
      'test/**/*.ts*'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.js*': ['webpack'],
      'test/**/*.ts*': ['webpack'],
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],

    coverageReporter: { type : 'lcov', dir : 'coverage/' },

    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};
