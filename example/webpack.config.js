var path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'Vue',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.styl$/, loader: "style!css!stylus"},
            {test: /\.js$/, loader: 'babel'}
        ]
    }
}
