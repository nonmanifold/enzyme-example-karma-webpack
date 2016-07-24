var path = require('path');
module.exports = {
    node: {
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
            {
                test: /\.(t|j)s(x?)$/, // .js, .ts, .tsx and .jsx
                loader: 'isparta',
                exclude: [/node_modules/, path.resolve(__dirname, 'test')]
            }
        ],
        loaders: [
            {
                test: /\.js(x?)$/, // .js and .jsx
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['airbnb']
                }
            },
            {
                test: /\.ts(x?)$/, // .ts and .tsx
                exclude: /node_modules/,
                loader: 'babel?presets[]=airbnb!ts-loader'
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
    resolve: {
        extensions: ['', '.tsx', '.ts', '.jsx', '.js', '.json']
    },
    externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    tslint: {
        failOnHint: true,
        configuration: require('./tslint.json')
    }
};
