const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|webp)$/, // Add a rule for image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep the original file name and extension
                            outputPath: 'images/', // Output images to an 'images' folder in the dist directory
                        },
                    },
                ],
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};