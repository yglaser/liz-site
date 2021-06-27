const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },

    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html'
  })],


}

