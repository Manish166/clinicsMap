const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path');
module.exports={
    entry : [path.join(__dirname, './src/index.js')],
    output: {
        path: path.join(__dirname, "src/dist"),
        filename: "bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/public/index.html"),
            filename : './index.html'
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devtool : 'inline-source-map',
    module :{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(css)$/,
                exclude:/node_modules/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer : {
        port : 3007
    }
}