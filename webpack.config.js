var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        images: './js/images.js',
        gifs: './js/gifs.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components', 'modules']
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }

        ]
    },
    plugins: [commonsPlugin]
};
