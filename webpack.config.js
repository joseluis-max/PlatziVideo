const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test:/\.(s*)css$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },{
        //archivos que usará para la versión de producción
        test:/\.(jpg|png|gif)$/,
        use:[
          {
            //loader instalado para enviar las imaganes a produccion 
            loader:'file-loader',
            options:{
              //define el nombre de la imagen en produccion 
              // [hash] genera un secuencia alfanumerica para el nombre de produccion de nuestros archivos
              // [ext] devuelve la extencion original del archivo.
              name:'assets/[hash].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ],
};