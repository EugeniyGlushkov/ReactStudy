const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [
                        '.js',
                        '.jsx'
                    ]
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        //https://stackoverflow.com/questions/52237855/support-for-the-experimental-syntax-classproperties-isnt-currently-enabled
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};