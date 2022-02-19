/*
module.exports = {
  lintOnSave: false,
};
*/

// omitted
module.exports = {
    // omitted
    devServer: {
      proxy: "http://localhost:8000"
    }
  };

const path = require("path");
module.exports = {
  publicPath: process.env.VUE_APP_STATIC_URL,
  outputDir: path.resolve(__dirname, "../static", "billing"),
  indexPath: path.resolve(__dirname, "../templates/", "billing",
  "index.html")
};