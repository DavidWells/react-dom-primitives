/*eslint-disable no-var */
var path = require('path')
var packageInfo = require('./package.json')
var webpack = require('webpack')
var playgroundPath = path.join(__dirname, 'playground')
var srcPath = path.join(__dirname, 'src')
var DEBUG = false

var externals = [].concat(Object.keys(packageInfo.peerDependencies))

module.exports = {
  target: 'web',
  entry: {
    createClassComponent: './src/utils/createClassComponent.js',
    createFunctionalComponent: './src/utils/createFunctionalComponent.js',
  },
  output: {
    path: path.resolve('lib/utils'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    library: packageInfo.name
  },
  resolve: {
    root: [
      path.resolve(__dirname)
    ],
    extensions: ['', '.js', '.jsx']
  },
  externals: externals,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      }
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: DEBUG,
    })
  ],
}
