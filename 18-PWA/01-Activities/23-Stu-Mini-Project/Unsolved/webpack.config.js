const config = {
    entry: {
      favorites: "./client/assets/js/favorites.js",
      index: "./client/assets/js/index.js",
      topic: "./client/assets/js/topic.js"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    }
  };
  module.exports = config;