const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path');
module.exports={
    entry : [path.join(__dirname, './src/index.js')],
    plugins:[
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
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
    output : {
        path: __dirname+'/dist',
        filename : './bundle.js'
    }
}