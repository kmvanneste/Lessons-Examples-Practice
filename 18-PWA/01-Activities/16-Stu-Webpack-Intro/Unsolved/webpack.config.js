const config = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    mode: "production"
};

module.exports = config;