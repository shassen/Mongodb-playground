const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // Set to 'production' for optimized production builds
  entry: "./src/index.ts", // Entry point for your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for the bundle
    filename: "bundle.js", // Name of the output bundle file
  },
  module: {
    rules: [
      {
        test: /\.ts?$/, // Rule for TypeScript files
        use: "ts-loader", // Loader to handle TypeScript compilation
        exclude: /node_modules/, // Exclude node_modules folder
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve extensions for import statements
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // For hot module replacement
  ],
};
