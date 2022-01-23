const { merge } = require('webpack-merge');
const common = require('./webpack.config.base');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        chunkFilename: '[chunkhash].js'
    },
    devServer: {
        compress: true,
        port: 3006,
        historyApiFallback: true,
        client: {
            logging: 'info'
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [new BundleAnalyzer()]
});
