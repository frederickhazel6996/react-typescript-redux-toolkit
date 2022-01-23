const { merge } = require('webpack-merge');
const common = require('./webpack.config.base');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[chunkhash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new MiniCSSExtractPlugin({ filename: '[name].[contenthash].css' }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        }),
        new CompressionPlugin({
            filename: '[name].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html)$/,
            minRatio: 0.8
        }),
        new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html)$/,
            minRatio: 0.8
        }),
        new LodashModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
});
