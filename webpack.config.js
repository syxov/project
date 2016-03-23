module.exports = {
    context: __dirname + '/src',
    entry: './index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel?preset[]=es2015&preset[]=stage-0'
        }
    ],
    devServer: {
        contentBase: __dirname + '/dist'
    }
};
