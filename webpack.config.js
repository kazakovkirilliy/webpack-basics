const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // entry point to the application (can be an object [code splitting]
  entry: "./src/index.js",
  output: {
    filename: "jimbojambo.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // matches any file that ends with .scss
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [new BundleAnalyzerPlugin()],

  devServer: {
    // files to serve
    static: [
      {
        directory: path.join(__dirname, "dist"),
      },
    ],
    port: 9000,
  },
};
