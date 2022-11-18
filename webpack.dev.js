/**
 * Desarrollo - Configuración de Webpack
 */
const path = require('path')

const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  mode: 'development',

  // Servidor de desarrollo
  devServer: {
    port: 9000,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true, // Mira cambios en /dist
    writeToDisk: true,
    open: true,
    hot: true,
    compress: true,

    quiet: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  /*
   * Elige un estilo de source mapping para mejorar el proceso de debugging.
   * https://webpack.js.org/configuration/devtool/
   */
  devtool: 'inline-source-map'
})
