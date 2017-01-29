const webpack = require('webpack');
module.exports = {
 //devtool:'source-map',
 devtool: 'cheap-module-source-map',
 entry: './src/index.js',
 output: {
   path: __dirname + "/build",
   filename: "ChatBubble.js"
 },
 module: {
   loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
