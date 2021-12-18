const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./myApp/index.js",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
        ]
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV==='production' ? 'production' : 'development',
}