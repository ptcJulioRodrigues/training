const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.woff$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/bld/fonts/&mimetype=application/font-woff'
            },
            {
                test: /\.woff2$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/bld/fonts/&mimetype=application/font-woff2'
            },
            {
                test: /\.ttf$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/bld/fonts/&mimetype=application/font-sfn'
            },
            {
                test: /\.eot$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/bld/fonts/'
            },
            {
                test: /\.svg$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=/bld/fonts/&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'css']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};