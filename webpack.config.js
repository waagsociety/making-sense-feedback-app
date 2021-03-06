const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['react', 'es2015', 'react-hmre'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[hash:base64:5]!postcss-loader',
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
    ],
  },
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-cssnext')(),
    ];
  },
};
