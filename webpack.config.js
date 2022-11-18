/**
 * Configuración general de Webpack
 *
 * Desarrollo - webpack.dev.js
 * Producción - webpack.prod.js
 *
 */
const path = require('path')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['jquery'],
    app: path.resolve(__dirname, 'src', 'main.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),

    // Elimina los archivos dentro del directorio `output.path` de webpack,
    // así como todos los assets que no se utilicen después de cada rebuild
    new CleanWebpackPlugin(),

    // Copia archivos o directorios al directorio de compilación `output.path`
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public')
      }
    ]),

    // Genera un archivo HTML5 a partir de una plantilla
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico')
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'fonts',
            outputPath: 'fonts',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'img',
            outputPath: 'img',
            name: '[name].[ext]'
          }
        }
      }
    ]
  }
}
