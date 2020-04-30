const htmlWelpackHtml = require("html-webpack-plugin")
const dotEnv = require("dotenv-webpack")

const pluginHtml = new htmlWelpackHtml({
    template:"./src/index.html",
    filename: "./index.html"
})

module.exports = {
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: ["babel-loader","eslint-loader"]
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[pluginHtml, new dotEnv]
}