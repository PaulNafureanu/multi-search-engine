const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.entry = "./src/index.tsx";
exports.module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "ts-loader",
      },
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
  ],
};
exports.resolve = {
  extensions: [".tsx", ".ts", ".js", "jsx"],
};
exports.output = {
  filename: "bundle.js",
  path: path.resolve(__dirname, "dist"),
};

exports.plugins = [
  new HtmlWebpackPlugin({
    title: "Multi search engine",
    meta: [{ "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
    favicon: path.resolve(__dirname, "public", "favicons", "whitefavicon.svg"),
  }),
];
exports.devServer = {
  static: {
    directory: path.join(__dirname, "public"),
  },
  hot: true,
  compress: true,
  port: 9000,
};
