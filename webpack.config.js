const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'JsonTools'    
  },
  target: "web",
  node: {
    file: "empty",
    fs: "empty",
    process: true,
    system: "empty",
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      "jsonlint": ["jsonlint", "parser"],
      "window.jsonlint": ["jsonlint", "parser"]
    }),
    new webpack.ProvidePlugin({
      "json5": ["json5", "dist"],
      "window.json5": ["json5", "dist"]
    })
  ],
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};
