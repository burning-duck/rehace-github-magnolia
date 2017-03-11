const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'remace-bundle.js',
        path: path.resolve(__dirname, '..', 'webresources')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                exclude: [
                    /\.js$/,
                    /\.css$/
                ],
                loader: 'file-loader',
                options: {
                    name: 'static/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('remace-bundle.css'),
        new LiveReloadPlugin()
    ]
}
