module.exports = {
    // this is where it starts the process of mapping the project dependencies
    entry: "./src/app/app.js",
    output: {
        // where bundle.js is output
        path: './src',
        filename: "bundle.js"
    },
    devServer: {
        // the server loaded on webpack command, can be hot loaded
        // I don't know what hot loaded means
        host: 'localhost',
        port: 8000,
    },
    module: {
        // loads css and loads babel compiled es6 to es5 for older browsers I think
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
