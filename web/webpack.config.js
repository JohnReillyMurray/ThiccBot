const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDir = path.join(__dirname, 'build/');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: outputDir,
    filename: 'Index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    host: '0.0.0.0',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /Index\.js$/, to: '/Index.js' }
      ],
      logger: console.log.bind(console)
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false
      },
      '/login': {
        target: 'http://localhost:5000',
      }
  }
  }
};
