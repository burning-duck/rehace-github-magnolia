const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'rehace-github-magnolia-bundle.js',
    path: path.resolve(__dirname, '..', 'webresources')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        exclude: [
          /\.js$/,
          /\.css$/
        ],
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('rehace-github-magnolia-bundle.css'),
    new LiveReloadPlugin(),
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, 'public'),
        from: `**/*`,
        to: path.resolve(__dirname, '..', 'webresources', 'public')
      }
    ])
  ]
}
