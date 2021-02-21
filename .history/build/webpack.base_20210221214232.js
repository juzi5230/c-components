const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader'
            }
        ]
        // loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader'
            }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            }
        ],
        // loaders: [
        // ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
            {
                loader: 'url-loader?limit=8192'
            }
        ]
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new VueLoaderPlugin(),
  ],
}