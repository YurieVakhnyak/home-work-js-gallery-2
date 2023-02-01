const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // main: path.resolve(__dirname, "./src/01-gallery.js"
    // main: path.resolve(__dirname, "./src/02-video.js"
    main: path.resolve(__dirname, "./src/03-feedback.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      //   template: path.resolve(__dirname, "./src/01-gallery.html"), // template file
      //   template: path.resolve(__dirname, "./src/02-video.html"), // template file
      template: path.resolve(__dirname, "./src/03-feedback.html"), // template file
      filename: "index.html", // output file
    }),
  ],
  module: {
    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
