const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin")

const config = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loaders: [
          "style-loader", "css-loader", "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.css',
      '.scss'
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/index.html", to: "[name].[ext]" },
        { from: "src/images/*", to: "images/[name].[ext]" },
        { from: "src/images/icons/*", to: "images/icons/[name].[ext]" }
      ]
    }),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8001
  },
  devtool: "source-map"
};

module.exports = config;