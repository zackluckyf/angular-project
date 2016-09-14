var path = require('path');
var webpack = require('webpack');
module.exports = {
    // this is where it starts the process of mapping the project dependencies
    entry: './src/index.js',
    output: {
        // where bundle.js is output
        path: './src',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: ['node_modules', 'vendor']
    },
    devServer: {
        // the server loaded on webpack command, can be hot loaded
        // I don't know what hot loaded means
        host: 'localhost',
        port: 8000
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        )
    ]
};
