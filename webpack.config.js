var devServer;

var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: './static',
    to: './static' },
  { from: './public',
    to: './public' }

  ],
  {
    copyUnmodified: true
  })

var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var WriteFilePlugin = require('write-file-webpack-plugin')
var WriteFilePluginConfig = new WriteFilePlugin({
  test: /static|public/
})

devServer = {
    outputPath: path.resolve(__dirname, './dist'),
    contentBase: path.resolve(__dirname, './dist'),
    colors: true,
    quiet: false,
    noInfo: false,
    publicPath: '/public/', /* @NOTE: https://github.com/ampedandwired/html-webpack-plugin/issues/393 */
    historyApiFallback: true,
    host: 'localhost',
    port: 8080,
    hot: false
};

var webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: devServer,
  debug: true,
  entry: [
    './index.js'
  ],
  output: {
    path: devServer.outputPath,
    publicPath: devServer.publicPath,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        'test': /\.json$/,
        'loader': 'json'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015&presets[]=react"
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: /public/
      }
    ]
  },
  plugins: [WriteFilePlugin, HTMLWebpackPluginConfig, CopyWebpackPluginConfig, new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/)]
};
