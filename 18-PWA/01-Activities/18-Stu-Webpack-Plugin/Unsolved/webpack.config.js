const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',

      inject: false,

      fingerprints: false,

      name: "Images App",
      short_name: 'Images App',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      start_url: "/",
      display:"standalone",

      icons: [
        {
          src: path.resolve(__dirname, 'public/assets/images/icon-512x512.png'),
          
        }
      ]
    })
  ]
}
  
  module.exports = config;
