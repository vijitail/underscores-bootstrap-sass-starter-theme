const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: ["./scss/main.scss"],
  output: {
    path: __dirname + "/assets"
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: "./css/build/main.min.css"
    })
  ],
  optimization: {
    minimizer: [
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({
        // cssProcessor: require("cssnano")
      })
    ]
  }
};
