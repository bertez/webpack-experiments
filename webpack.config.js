module.exports = {
    entry: './js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'bower_components', 'modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
       ]
    }
};