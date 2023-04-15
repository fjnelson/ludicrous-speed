const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

// Defining the entry point to ./client/js/index.js
module.exports = () => {
    return {
            mode: 'production',
            entry: './client/js/index.js',
            output: {
                path: path.resolve(__dirname, 'dist'),
                //filename: 'bundle.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'Hello Stranger - Storytelling'
            }),
        new GenerateSW(),
        new WebpackPwaManifest({
            name: 'Hello Stranger',
            description: 'Connect with strangers through stories',
            background_color: '#e2ac7e',
            crossorigin: null,
            publicPath: './',
            start_url: './',

        })
        
        ],

    }
};