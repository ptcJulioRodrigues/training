const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [

        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ]
});