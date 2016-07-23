var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.js': ['webpack']
    },

    webpack: {
      node : {
        fs: 'empty'
      },
      devtool: 'inline-source-map', //just do inline source maps instead of the default

      isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
          presets: ['airbnb']
        }
      },
      module: {
        preLoaders: [
          { test: /\.js$/, loader: 'isparta', exclude: [path.resolve(__dirname, 'node_modules'),path.resolve(__dirname, 'test')]}
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules',
          }
        ],

      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

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
