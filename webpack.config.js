const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const pkg = require('./package.json');

module.exports = {
    entry: './src/index.js',
    externals: [nodeExternals()],
    output: {
        filename: 'Main.js',
        path: path.resolve(__dirname, 'dist'),
        library: pkg.name,
        libraryTarget: 'umd',
    },
    target: 'web',
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, './src'),
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
};
