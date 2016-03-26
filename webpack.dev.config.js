/*eslint-disable no-var */
var path = require('path')
var pkg = require('./package.json')
var webpack = require('webpack')
var playgroundPath = path.join(__dirname, 'playground')
var srcPath = path.join(__dirname, 'src')
var DEBUG = false

var aliases = {}
// aliases['createFunctionalComponent'] = path.resolve(__dirname) + '/src/utils/createFunctionalComponent.js'
// aliases['createClassComponent'] = path.resolve(__dirname) + '/src/utils/createClassComponent.js'

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    'app': [
      'webpack-hot-middleware/client?http://localhost:7000',
      './playground/index.js'
     ],
  },
  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  resolve: {
    root: [
      path.resolve(__dirname)
    ],
    alias: aliases,
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader'],
        include: [srcPath, playgroundPath],
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: DEBUG,
      VERSION: JSON.stringify(pkg.version)
    })
  ],
}
