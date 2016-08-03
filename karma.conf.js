var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'dll/vendor.js',
            'dll/testUtils.js',
            'test/**/*-test.js*',
            'test/**/*-test.ts*'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'test/**/*-test.js*': ['webpack'],
            'test/**/*-test.ts*': ['webpack'],
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
            'karma-coverage',
            'karma-remap-istanbul'
        ],

        coverageReporter: {
            reporters: [
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage-final.json'
                }
            ]
        },
        remapIstanbulReporter: {
            src: 'coverage/coverage-final.json',
            reports: {
                lcovonly: 'coverage/lcov.info',
                html: 'coverage/html'
            },
            timeoutNotCreated: 1000,
            timeoutNoMoreFiles: 1000
        },
        reporters: ['progress', 'coverage', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
    })
};
