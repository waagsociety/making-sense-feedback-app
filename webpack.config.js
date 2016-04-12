module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    }
};
