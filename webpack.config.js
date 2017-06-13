var path = require('path');
var nodeExternals = require('webpack-node-externals');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js',
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: [nodeExternals()],
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'localhost:8000'
        })
    ]
}