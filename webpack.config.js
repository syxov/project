var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: './index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ["node_modules", "bower_components"]
    },
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel?preset[]=es2015&preset[]=stage-0'
        },
        {
            test: /\.html$/,
            loader: 'html'
        }
    ],
    plugins: [
        new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html'
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ],
    devServer: {
        contentBase: __dirname + '/dist'
    }
};
