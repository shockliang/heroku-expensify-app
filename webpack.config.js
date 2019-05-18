const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === "development"
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: !isProduction ? "[name].css" : "[name].[hash].css",
        // chunkFilename: !isProduction ? "[id].css" : "[id].[hash].css"
        // filename: "[name].css",
        // chunkFilename: "[id].css"
        filename: "styles.css",
        chunkFilename: "[name].css"
      })
    ],
    // devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    },
    mode: "development"
  };
};
