/**
 * Producción - Configuración de Webpack
 */
const path = require('path')

const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },

  plugins: [
    // Extrae los archivos CSS en archivos separados
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: '[id].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true
            }
          }
          // 'postcss-loader',
          // 'sass-loader',
        ]
      }
    ]
  },

  /*
   * Elige un estilo de source mapping para mejorar el proceso de debugging.
   * https://webpack.js.org/configuration/devtool/
   */
  devtool: 'eval-source-map'
})
