var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        vendor: ['react'],
        testUtils: ['enzyme']
    },
    output: {
        path: path.join(__dirname, "dll"),
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            name: "[name]_[hash]"
        })
    ],
    resolve: {
        extensions: ['', '.jsx', '.js', '.json'],
    },
    externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    module: {
        loaders: [

            {
                test: /\.json$/,
                loader: 'json',
            }
        ]
    }
};
