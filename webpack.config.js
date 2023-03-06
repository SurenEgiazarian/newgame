const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    entry: {
        start: ['./difficulty.ts', './index.ts'],
        game: ['./cards.ts', './game.ts', './index.ts'],
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {},
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    mode: mode,
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['start'],
        }),
        new HtmlWebpackPlugin({
            filename: 'game.html',
            template: 'game.html',
            chunks: ['game'],
        }),
    ],
    performance: {
        maxAssetSize: 4000000,
        maxEntrypointSize: 4000000,
    },
}
